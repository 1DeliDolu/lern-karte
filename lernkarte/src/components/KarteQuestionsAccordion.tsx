"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { type AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  type AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import type { Karte } from "@/types/question";
import {
  linesAfterInsertGorunce,
  splitByLeadingLabelColon,
  splitByKeywords,
} from "@/utils/utils";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  "&:not(:last-of-type)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
}));

const germanKeywords = ["Vertraulichkeit", "Integrität", "Verfügbarkeit"];
const turkishKeywords = ["görünce", "gorunce", "Integrität"];

type Props = {
  karteNum: number;
  startIndex: number;
  endIndex: number;
  total: number;
  questions: Karte[];
};

type StructuredTextOptions = {
  splitLeadingLabel?: boolean;
};

function renderStructuredText(
  value: string | undefined,
  keywords: string[],
  options: StructuredTextOptions = {}
) {
  if (!value) return null;

  const { splitLeadingLabel = true } = options;
  const lines = linesAfterInsertGorunce(value);

  return lines.map((line, lineIdx) => {
    const segments = splitLeadingLabel
      ? splitByLeadingLabelColon(line)
      : [{ text: line, bold: false }];

    return (
      <Typography component="div" key={lineIdx} sx={{ lineHeight: 1.6 }}>
        {segments.flatMap((segment, segIdx) => {
          if (segment.bold) {
            return <strong key={`segment-${segIdx}`}>{segment.text}</strong>;
          }

          return splitByKeywords(segment.text, keywords).map((part, partIdx) =>
            part.bold ? (
              <strong key={`part-${segIdx}-${partIdx}`}>{part.text}</strong>
            ) : (
              <span key={`part-${segIdx}-${partIdx}`}>{part.text}</span>
            )
          );
        })}
      </Typography>
    );
  });
}

function questionSummaryText(question: Karte, defaultIndex: number) {
  const lines = linesAfterInsertGorunce(
    question.frageDE ?? question.frageTR ?? ""
  );
  const firstLine = lines[0];
  if (!firstLine) return `Frage ${defaultIndex}`;
  return firstLine.length > 90 ? `${firstLine.slice(0, 87)}…` : firstLine;
}

export default function KarteQuestionsAccordion({
  karteNum,
  startIndex,
  endIndex,
  total,
  questions,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(() =>
    questions.length > 0 ? `panel-${startIndex}` : false
  );

  React.useEffect(() => {
    if (questions.length === 0) {
      setExpanded(false);
      return;
    }

    setExpanded((prev) => {
      if (!prev) return `panel-${startIndex}`;
      const exists = questions.some(
        (_, idx) => `panel-${startIndex + idx}` === prev
      );
      return exists ? prev : `panel-${startIndex}`;
    });
  }, [questions, startIndex]);

  const handleChange = React.useCallback(
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    },
    []
  );

  React.useEffect(() => {
    function applyHashTarget() {
      const { hash } = window.location;
      if (!hash || hash.length < 2) {
        return;
      }

      const target = hash.slice(1);
      if (!target.startsWith("question-")) {
        return;
      }

      const questionNumber = Number.parseInt(target.replace("question-", ""), 10);
      if (!Number.isFinite(questionNumber)) {
        return;
      }

      const panelId = `panel-${questionNumber}`;
      const inRange = questions.some(
        (_, idx) => `panel-${startIndex + idx}` === panelId
      );

      if (!inRange) {
        return;
      }

      setExpanded(panelId);
      const element = document.getElementById(`question-${questionNumber}`);
      element?.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    applyHashTarget();
    window.addEventListener("hashchange", applyHashTarget);
    return () => window.removeEventListener("hashchange", applyHashTarget);
  }, [questions, startIndex]);

  if (questions.length === 0) {
    return (
      <Box sx={{ px: 2, py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Karte {karteNum}
        </Typography>
        <Typography>Keine Fragen für diese Karte gefunden.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Karte {karteNum}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Fragen {startIndex}–{endIndex} von {total}
        </Typography>
      </Box>

      {questions.map((question, idx) => {
        const position = startIndex + idx;
        const panelId = `panel-${position}`;

        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            id={`question-${position}`}
          >
            <AccordionSummary
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography
                component="span"
                fontWeight={600}
                sx={{ minWidth: 48 }}
              >
                {position}.
              </Typography>
              <Typography component="span" sx={{ flexGrow: 1 }}>
                {questionSummaryText(question, position)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "grid", gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Frage (DE)
                  </Typography>
                  {renderStructuredText(question.frageDE, germanKeywords) || (
                    <Typography variant="body2" color="text.secondary">
                      Keine Frage vorhanden.
                    </Typography>
                  )}
                </Box>

                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Antwort (DE)
                  </Typography>
                  {renderStructuredText(question.antwortDE, germanKeywords) || (
                    <Typography variant="body2" color="text.secondary">
                      Keine Antwort vorhanden.
                    </Typography>
                  )}
                </Box>

                <Divider />

                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Soru (TR)
                  </Typography>
                  {renderStructuredText(question.frageTR, turkishKeywords, {
                    splitLeadingLabel: false,
                  }) || (
                    <Typography variant="body2" color="text.secondary">
                      Soru mevcut değil.
                    </Typography>
                  )}
                </Box>

                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Cevap (TR)
                  </Typography>
                  {renderStructuredText(question.antwortTR, turkishKeywords, {
                    splitLeadingLabel: false,
                  }) || (
                    <Typography variant="body2" color="text.secondary">
                      Cevap mevcut değil.
                    </Typography>
                  )}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
