'use client';

import { Accordion, AccordionItem } from "./ui/Accordion";
import { CustomMDX } from "./mdx";
import { useLanguage } from "app/context/language-context";
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BriljantAuditContent } from "./briljant-audit-content";
import Link from "next/link";

interface AuditAccordionsProps {
  source: MDXRemoteSerializeResult;
  titleOverrides?: {
    fullReport?: { en?: string; fi?: string };
    whatAndWhy?: { en?: string; fi?: string };
  };
  useTranslations?: string;
}

export function AuditAccordions({ source, titleOverrides, useTranslations }: AuditAccordionsProps) {
  const { t, language } = useLanguage();
  const fullReportTitle = (titleOverrides?.fullReport && (titleOverrides.fullReport[language as 'en' | 'fi'] || undefined)) || t('audits.fullReport');
  const whatAndWhyTitle = (titleOverrides?.whatAndWhy && (titleOverrides.whatAndWhy[language as 'en' | 'fi'] || undefined)) || t('audits.whatAndWhy');

  return (
    <Accordion className="mt-6">
      <AccordionItem id="what-why" title={whatAndWhyTitle} defaultOpen>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            {(() => {
              const description = t('audits.whatAndWhyDescription');
              if (typeof description === 'object' && description !== null && 'beforeLink' in description) {
                const desc = description as { beforeLink: string; linkText: string; afterLink1: string; middleText: string; afterLink2: string };
                return (
                  <>
                    {desc.beforeLink}
                    <Link href="https://portfolio2025-delta-dusky.vercel.app/blog/briljant-audit" className="text-accent-light dark:text-accent-dark hover:underline">
                      {desc.linkText}
                    </Link>
                    {desc.afterLink1}
                    <br />
                    <br />
                    {desc.middleText}
                    <br />
                    {desc.afterLink2}
                  </>
                );
              }
              return description;
            })()}
          </p>
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

