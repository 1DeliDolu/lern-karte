import React from 'react'
import { notFound } from 'next/navigation'
import { Box, Typography, Card, CardContent } from '@mui/material'
import Link from 'next/link'
import FolderIcon from '@mui/icons-material/Folder'
import ArticleIcon from '@mui/icons-material/Article'
import { buildDocsTreeForCategory, DocNode, readDoc } from '@/lib/docs-finder'
import DocsPersistentDrawer, { DocsNavNode } from '@/components/DocsPersistentDrawer'
import { formatLabel, naturalSort } from '@/utils/format'

type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  
  // First segment should be the category (teil-1, teil-2, teil-3)
  if (!slug || slug.length === 0) {
    notFound()
  }
  
  const category = slug[0]
  const validCategories = ['teil-1', 'teil-2', 'teil-3']
  
  if (!validCategories.includes(category)) {
    notFound()
  }

  // Build navigation tree for this category
  const docTree = buildDocsTreeForCategory(category);
  
  const convertToNavNode = (node: DocNode, basePath: string): DocsNavNode => {
    const href = `${basePath}/${node.path}`;
    
    if (node.type === 'dir') {
      return {
        id: node.path,
        type: 'dir',
        name: node.name,
        href,
        children: node.children.map((child: DocNode) => convertToNavNode(child, basePath))
      };
    }
    
    return {
      id: node.path,
      type: 'file',
      name: node.name,
      href
    };
  };
  
  const nodes = docTree.map(node => convertToNavNode(node, `/docs/${category}`));
  
  // If only category is provided, redirect to main docs page
  if (slug.length === 1) {
    notFound()
  }
  
  // Read the document using the remaining slug segments
  const docSegments = slug.slice(1)
  
  // First, try to find if this is a directory node
  const findNode = (nodes: DocsNavNode[], segments: string[]): DocsNavNode | null => {
    if (segments.length === 0) return null;
    
    const [first, ...rest] = segments;
    const node = nodes.find(n => n.name.toLowerCase() === first.toLowerCase());
    
    if (!node) return null;
    if (rest.length === 0) return node;
    if (node.type === 'dir') {
      return findNode(node.children, rest);
    }
    return null;
  };
  
  const dirNode = findNode(nodes, docSegments);
  
  // If it's a directory with children, always show card view
  if (dirNode && dirNode.type === 'dir' && dirNode.children.length > 0) {
    // Sort children: directories first, then files, both in natural order
    const sortedChildren = [...dirNode.children].sort((a, b) => {
      // First, group by type (directories before files)
      if (a.type !== b.type) {
        return a.type === 'dir' ? -1 : 1;
      }
      // Then sort naturally by name
      return naturalSort(a.name, b.name);
    });
    
    return (
      <DocsPersistentDrawer nodes={nodes}>
        <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg', mx: 'auto' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {formatLabel(dirNode.name)}
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
            mt: 3
          }}>
            {sortedChildren.map((child) => (
              <Card 
                key={child.id}
                component={Link} 
                href={child.href}
                sx={{ 
                  height: '100%', 
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {child.type === 'dir' ? (
                      <FolderIcon color="primary" sx={{ mr: 1 }} />
                    ) : (
                      <ArticleIcon color="primary" sx={{ mr: 1 }} />
                    )}
                    <Typography variant="h6" component="h2">
                      {formatLabel(child.name)}
                    </Typography>
                  </Box>
                  {child.type === 'dir' && child.children && (
                    <Typography variant="body2" color="text.secondary">
                      {child.children.length} {child.children.length === 1 ? 'Element' : 'Elemente'}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </DocsPersistentDrawer>
    );
  }
  
  // If not a directory, try to read as a markdown file
  const doc = readDoc(category, docSegments);
  
  if (!doc) {
    notFound();
  }
  
  // Display markdown content with navigation drawer
  return (
    <DocsPersistentDrawer nodes={nodes}>
      <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg', mx: 'auto' }}>
        <Box
          sx={{
            mt: 0,
            '& h1': { mt: 0, mb: 2, fontSize: '2.5rem', fontWeight: 700 },
            '& h2': { mt: 3, mb: 2, fontSize: '2rem', fontWeight: 600 },
            '& h3': { mt: 2, mb: 1.5, fontSize: '1.5rem', fontWeight: 600 },
            '& h4': { mt: 2, mb: 1, fontSize: '1.25rem', fontWeight: 600 },
            '& p': { mb: 2, lineHeight: 1.7 },
            '& ul, & ol': { mb: 2, pl: 4 },
            '& li': { mb: 1 },
            '& code': { 
              px: 1, 
              py: 0.5, 
              borderRadius: 1, 
              bgcolor: 'action.hover',
              fontFamily: 'monospace'
            },
            '& pre': { 
              p: 2, 
              borderRadius: 1, 
              bgcolor: 'action.hover', 
              overflow: 'auto',
              '& code': { p: 0, bgcolor: 'transparent' }
            },
            '& blockquote': {
              borderLeft: 4,
              borderColor: 'primary.main',
              pl: 2,
              ml: 0,
              fontStyle: 'italic',
              color: 'text.secondary'
            },
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              mb: 2
            },
            '& th, & td': {
              border: 1,
              borderColor: 'divider',
              p: 1.5,
              textAlign: 'left'
            },
            '& th': {
              bgcolor: 'action.hover',
              fontWeight: 600
            }
          }}
          // Rendering precompiled HTML from markdown. See note in lernfeld page.
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: doc.html || '' }}
        />
      </Box>
    </DocsPersistentDrawer>
  );
}