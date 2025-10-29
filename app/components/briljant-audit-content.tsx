'use client';

import { useLanguage } from "app/context/language-context";

export function BriljantAuditContent() {
  const { t } = useLanguage();
  const audit = t('briljantAudit') as any;

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">Introduction</h2>
        <p className="mb-4">{audit.introduction}</p>
        <p className="mb-4">{audit.objective}</p>
        <p className="mb-4">{audit.context}</p>
        <p>{audit.disclaimer}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">{audit.priorities.title}</h3>
        <p className="mb-3">{audit.priorities.high}</p>
        <p className="mb-3">{audit.priorities.medium}</p>
        <p className="mb-3">{audit.priorities.low}</p>
        <p>{audit.priorities.recommendations}</p>
      </section>

      <section>
        <h4 className="text-lg font-semibold mb-2">{audit.remediation.title}</h4>
        <p>{audit.remediation.content}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">{audit.methods.title}</h3>
        <p>{audit.methods.content}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">{audit.issues.title}</h2>
        
        <h3 className="text-xl font-semibold mb-2">{audit.issues.highPriority}</h3>
        <h4 className="text-lg font-medium mb-2">{audit.issues.contrast}</h4>
        <p className="mb-4">{audit.issues.contrastDetails}</p>

        <h3 className="text-xl font-semibold mb-2">{audit.issues.lowPriority}</h3>
        <h4 className="text-lg font-medium mb-2">{audit.issues.heading}</h4>
        
        <h4 className="text-lg font-medium mb-2">{audit.issues.recommendations}</h4>
        <p>{audit.issues.formNotes}</p>
      </section>
    </div>
  );
}

