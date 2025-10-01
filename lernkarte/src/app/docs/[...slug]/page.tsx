import React from 'react'
import { notFound } from 'next/navigation'
import { Box, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { readDoc, buildDocsTreeForCategory, DocNode } from '@/lib/docs-finder'
import DocsPersistentDrawer, { DocsNavNode } from '@/components/DocsPersistentDrawer'

type Props = {
  params: Promise<{ slug: string[] }>
}

// Helper function to format labels: replace dashes with spaces and capitalize first letter of each word
function formatLabel(text: string): string {
  return text
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
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
  
  // If only category is provided, show category overview
  if (slug.length === 1) {
    return (
      <DocsPersistentDrawer nodes={nodes}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            {category === 'teil-1' ? 'Teil 1' : category === 'teil-2' ? 'Teil 2' : 'Teil 3'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Wählen Sie ein Thema aus der Navigation auf der linken Seite.
          </Typography>
        </Box>
      </DocsPersistentDrawer>
    )
  }
  
  // Read the document using the remaining slug segments
  const docSegments = slug.slice(1)
  const doc = readDoc(category, docSegments)
  
  if (!doc) {
    notFound()
  }
  
  // Build breadcrumbs with formatted labels
  const breadcrumbs = [
    { label: 'Docs', href: '/docs' },
    { label: category === 'teil-1' ? 'Teil 1' : category === 'teil-2' ? 'Teil 2' : 'Teil 3', href: `/docs/${category}` },
    ...docSegments.map((segment, idx) => ({
      label: formatLabel(segment),
      href: `/docs/${category}/${docSegments.slice(0, idx + 1).join('/')}`
    }))
  ]
  
  return (
    <DocsPersistentDrawer nodes={nodes}>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        sx={{ mb: 3 }}
      >
        {breadcrumbs.map((crumb, idx) => 
          idx === breadcrumbs.length - 1 ? (
            <Typography key={crumb.href} color="text.primary">
              {crumb.label}
            </Typography>
          ) : (
            <MuiLink
              key={crumb.href}
              component={Link}
              href={crumb.href}
              underline="hover"
              color="inherit"
            >
              {crumb.label}
            </MuiLink>
          )
        )}
      </Breadcrumbs>
      
      {/* Document content */}
      <Box
        sx={{
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
        dangerouslySetInnerHTML={{ __html: doc.html || '' }}
      />
    </DocsPersistentDrawer>
  )
}