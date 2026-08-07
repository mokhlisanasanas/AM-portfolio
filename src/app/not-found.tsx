import { Container } from "@/shared/components/Container";
import { Heading, LinkButton, Text } from "@/shared/components/ui";

export default function NotFound() {
  return (
    <Container className="py-[var(--layout-section-gap-lg)]">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <p className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
            404
          </p>
          <Heading level={1} size="page">
            Page not found
          </Heading>
          <Text size="lg">
            The page you are looking for does not exist or may have moved.
          </Text>
        </div>

        <LinkButton href="/" variant="primary">
          Back to home
        </LinkButton>
      </div>
    </Container>
  );
}
