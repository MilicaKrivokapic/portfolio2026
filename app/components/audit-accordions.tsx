'use client';

import { Accordion, AccordionItem } from "./ui/Accordion";
import { CustomMDX } from "./mdx";
import { useLanguage } from "app/context/language-context";
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BriljantAuditContent } from "./briljant-audit-content";

interface AuditAccordionsProps {
  source: MDXRemoteSerializeResult;
  summary?: string;
  titleOverrides?: {
    fullReport?: { en?: string; fi?: string };
    whatAndWhy?: { en?: string; fi?: string };
  };
  useTranslations?: string;
}

export function AuditAccordions({ source, summary, titleOverrides, useTranslations }: AuditAccordionsProps) {
  const { t, language } = useLanguage();
  const fullReportTitle = (titleOverrides?.fullReport && (titleOverrides.fullReport[language as 'en' | 'fi'] || undefined)) || t('audits.fullReport');
  const whatAndWhyTitle = (titleOverrides?.whatAndWhy && (titleOverrides.whatAndWhy[language as 'en' | 'fi'] || undefined)) || t('audits.whatAndWhy');

  return (
    <Accordion className="mt-6">
      <AccordionItem id="what-why" title={whatAndWhyTitle} defaultOpen>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            This section explains what this audit is about and why it matters. It summarizes the scope, goals, and key outcomes at a glance for quick orientation.
          </p>
          {summary && (
            <p className="text-neutral-700 dark:text-neutral-200">{summary}</p>
          )}
        </div>
      </AccordionItem>

      <AccordionItem id="full-report" title={fullReportTitle} defaultOpen={false}>
        {useTranslations === 'briljantAudit' ? (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <BriljantAuditContent />
            <CustomMDX source={source} />
          </div>
        ) : (
          <CustomMDX source={source} />
        )}
      </AccordionItem>
    </Accordion>
  );
}

