"use client";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';

import { QUESTIONS_PER_KARTE } from '@/lib/questions';

export default function Home() {



    return (
        <Container
            maxWidth="lg"
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #ffffff, #f1f5f9)',
                py: { xs: 4, sm: 8 },
                mt: 2,
                display: 'block',
            }}
        >
                <Paper elevation={6} sx={{ p: 4, mb: 4 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
                        <Box sx={{ position: 'relative', width: '100%', height: 220, borderRadius: 2, overflow: 'hidden' }}>
                            <Image src="/globe.svg" alt="hero" fill style={{ objectFit: 'cover', opacity: 0.9 }} />
                        </Box>

                        <Box>
                            <Typography variant="h3" component="h1" gutterBottom>
                                Lernkarte AP2 — IHK Prüfungsvorbereitung
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Kurze, gezielte Karteikarten für deine Abschlussprüfung. Lerne effizient mit
                                Wiederholung und gezielten Prüfungsfragen.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" onClick={() => window.location.href = '/lern'}>Loslegen</Button>
                                <Button variant="outlined" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>Wie es funktioniert</Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6">Wie Lernkarte funktioniert</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Jede Karte enthält bis zu {QUESTIONS_PER_KARTE} Fragen. Wähle eine Karte und arbeite
                            die Fragen durch. Markiere schwierige Fragen und wiederhole sie häufiger.
                        </Typography>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6">Tipps zur IHK-Prüfung</Typography>
                        <ul style={{ paddingLeft: 18 }}>
                            <li>Regelmäßig kurze Sessions (25–50 Minuten) statt langer Marathon-Lerneinheiten.</li>
                            <li>Praxisorientierte Fragen priorisieren — prüfungsrelevante Themen zuerst.</li>
                            <li>Alte Prüfungen und Musterfragen durchgehen, um Ablauf und Fragestil kennenzulernen.</li>
                        </ul>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6">Lernroutine</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Setze dir kleine Ziele: eine Karte pro Tag oder 30 Fragen pro Woche. Nutze
                            Wiederholung in Intervallen (Spaced Repetition) für nachhaltiges Behalten.
                        </Typography>
                    </Paper>
                </Box>
        </Container>
    );
}
