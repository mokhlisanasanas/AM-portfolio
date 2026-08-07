import { Container } from "@/shared/components/Container";

export default function Loading() {
  return (
    <Container className="py-[var(--layout-section-gap-lg)]">
      <p className="text-[length:var(--typography-size-body)] text-[var(--color-text-secondary)]">
        Loading portfolio...
      </p>
    </Container>
  );
}
