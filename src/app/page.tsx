import { Kilit } from "@/components/Logo";

export default function AnaSayfa() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-8">
      <Kilit yukseklik={40} animasyonlu />
      <p className="text-sm text-neutral-500">Ana sayfa yeniden kurgulanıyor.</p>
    </main>
  );
}
