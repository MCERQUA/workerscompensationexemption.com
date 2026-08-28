import { US_STATES, STATE_GRID_COLS, STATE_GRID_ROWS } from "@/lib/states";
import { FadeIn } from "@/components/animations/FadeIn";

const TILE = 40;
const GAP = 4;
const W = STATE_GRID_COLS * (TILE + GAP) - GAP;
const H = STATE_GRID_ROWS * (TILE + GAP) - GAP;

type Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
};

/**
 * Tile-grid map of all 50 states. Each state gets an equal-sized tile in roughly its
 * geographic position, so the small Northeast states are as readable and as clickable
 * as Texas. Rendered as inline SVG — no map library, no external tiles.
 */
export function FiftyStateMap({
  eyebrow = "All 50 states",
  title = "Licensed in every state",
  lead = "We handle workers' comp exemption questions nationwide. Find your state below.",
}: Props) {
  const alphabetical = [...US_STATES].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="state-map" className="bg-white py-16 md:py-24">
      <div className="container-tight">
        <FadeIn className="max-w-2xl">
          <span className="eyebrow"><span className="h-px w-8 bg-clay" />{eyebrow}</span>
          <h2 className="mt-3 h-section">{title}</h2>
          <p className="mt-4 lead">{lead}</p>
        </FadeIn>

        <FadeIn className="mt-10">
          <div className="rounded-3xl border border-adobe bg-sonoran-sand p-6 md:p-10">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto max-w-3xl mx-auto"
              role="img"
              aria-label="Tile map of all 50 United States"
            >
              {US_STATES.map((s) => {
                const x = s.col * (TILE + GAP);
                const y = s.row * (TILE + GAP);
                return (
                  <g key={s.abbr}>
                    <title>{s.name}</title>
                    <rect
                      x={x}
                      y={y}
                      width={TILE}
                      height={TILE}
                      rx={6}
                      className="fill-clay/12 stroke-clay/35"
                      strokeWidth={1}
                    />
                    <text
                      x={x + TILE / 2}
                      y={y + TILE / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="fill-espresso font-heading"
                      fontSize={14}
                      fontWeight={700}
                    >
                      {s.abbr}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </FadeIn>

        {/* Full alphabetical list — the map is visual, this is the readable index */}
        <FadeIn className="mt-12">
          <h3 className="font-heading font-extrabold text-espresso text-xl">
            All 50 states, A–Z
          </h3>
          <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-2.5">
            {alphabetical.map((s) => (
              <li key={s.slug} className="flex items-baseline gap-2 text-mocha">
                <span className="font-heading font-bold text-clay text-xs w-6 flex-shrink-0">
                  {s.abbr}
                </span>
                <span className="text-sm">{s.name}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
