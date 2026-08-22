import Container from "./Container";
import Section from "./Section";

export default function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Section tone="canvas" pad="lg">
        <Container>
          {eyebrow && (
            <p className="text-label uppercase font-semibold text-accent-700">
              {eyebrow}
            </p>
          )}
          <h1 className="text-display-lg font-display text-ink mt-3">{title}</h1>
          {lead && (
            <p className="text-body-lg text-ink-muted max-w-2xl mt-4">{lead}</p>
          )}
          {children}
        </Container>
      </Section>
      <hr className="border-hairline" />
    </>
  );
}
