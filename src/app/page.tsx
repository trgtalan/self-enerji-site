import { Isaret, Kilit } from "@/components/Logo";

export default function AnaSayfa() {
  return (
    <main className="flex min-h-dvh flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-zemin-koyu px-8 py-24">
        <Isaret yukseklik={132} animasyonlu />
        <Kilit yukseklik={34} koyuZemin />
      </section>
      <section className="flex flex-col items-center gap-8 bg-white px-8 py-16">
        <Kilit yukseklik={34} />
        <div className="flex items-end gap-6 text-marka-teal">
          <Isaret yukseklik={64} />
          <Isaret yukseklik={32} />
          <Isaret yukseklik={16} />
          <span className="ml-4 text-marka-teal"><Isaret yukseklik={32} tekRenk /></span>
        </div>
        <p className="text-sm text-neutral-500">Marka varlıkları yerleşti — Hero sırada.</p>
      </section>
    </main>
  );
}
