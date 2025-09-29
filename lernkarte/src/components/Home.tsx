"use client";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { QUESTIONS_PER_KARTE } from '@/lib/questions';

export default function Home() {



    return (
        <div className="font-sans min-h-screen bg-gradient-to-b from-white to-slate-50 p-8 sm:p-16 my-5">
        <main className="mx-auto max-w-5xl mb-20 text-left">
                {/* Hero */ }
                <Paper elevation={ 6 } className="p-8 mb-8 bg-white">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div>
                            <Typography component="h1" variant="h3" gutterBottom>
                                Lernkarte AP2 — IHK Prüfungsvorbereitung
                            </Typography>
                            <Typography variant="body1" className="text-slate-700">
                                Kurze, gezielte Karteikarten für deine Abschlussprüfung. Lerne effizient mit
                                Wiederholung und gezielten Prüfungsfragen.
                            </Typography>
                        </div>
                    </div>
                </Paper>

                {/* Tips section */ }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Paper className="p-6">
                        <Typography variant="h6" gutterBottom>Wie Lernkarte funktioniert</Typography>
                        <Typography variant="body2" className="text-slate-700">
                            Jede Karte enthält bis zu { QUESTIONS_PER_KARTE } Fragen. Wähle eine Karte und arbeite
                            die Fragen durch. Markiere schwierige Fragen und wiederhole sie häufiger.
                        </Typography>
                    </Paper>

                    <Paper className="p-6 md:m-5">
                        <Typography variant="h6" gutterBottom>Tipps zur IHK-Prüfung</Typography>
                        <ul className="list-disc pl-5 text-slate-700">
                            <li>Regelmäßig kurze Sessions (25–50 Minuten) statt langer Marathon-Lerneinheiten.</li>
                            <li>Praxisorientierte Fragen priorisieren — prüfungsrelevante Themen zuerst.</li>
                            <li>Alte Prüfungen und Musterfragen durchgehen, um Ablauf und Fragestil kennenzulernen.</li>
                        </ul>
                    </Paper>

                </div>
            </main>
        </div>
    );
}
