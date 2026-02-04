<script lang="ts">
  import * as Avatar from "./ui/avatar";
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";

  interface Props {
    name: string;
    logo?: string;
    fallback: string;
    description: string;
    timePeriod: string;
    link?: string;
    past?: boolean;
    skills?: string[];
  }

  const skillColors = [
    "text-ctp-red",
    "text-ctp-peach",
    "text-ctp-yellow",
    "text-ctp-green",
    "text-ctp-teal",
    "text-ctp-sky",
    "text-ctp-sapphire",
    "text-ctp-blue",
    "text-ctp-lavender",
    "text-ctp-mauve",
    "text-ctp-pink",
  ];

  function getSkillColor(seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return skillColors[Math.abs(hash) % skillColors.length];
  }

  let {
    name,
    logo,
    fallback,
    description,
    timePeriod,
    link,
    past = false,
    skills = [],
  }: Props = $props();
</script>

<div class="relative flex items-start gap-6 group">
  <!-- Timeline dot -->
  <div
    class="relative z-10 flex-shrink-0 size-10 rounded-full bg-ctp-base border-2 border-ctp-surface2 flex items-center justify-center transition-all duration-300 group-hover:border-accent-color group-hover:scale-105 accent-glow overflow-hidden"
  >
    <Avatar.Root class="size-8">
      {#if logo}
        <Avatar.Image src={logo} alt={name} />
      {/if}
      <Avatar.Fallback class="text-xs">{fallback}</Avatar.Fallback>
    </Avatar.Root>
  </div>
  <!-- Content -->
  <div
    class="flex-1 pb-2 transition-all duration-300 group-hover:-translate-y-0.5"
  >
    <div
      class="rounded-lg p-4 -m-4 transition-all duration-300 group-hover:bg-ctp-surface0/50 group-hover:shadow-lg"
    >
      <a
        class="inline-block {link ? 'cursor-pointer' : ''}"
        {...link
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : {}
        }
      >
        <h3
          class="font-semibold text-lg mb-1 transition-colors duration-200"
        >
          <span class="accent-color hover:underline">{name}</span>
          {#if past}<span class="text-ctp-overlay0"> (past)</span>{/if}
        </h3>
      </a>

      <p
        class="text-sm text-ctp-subtext0 mb-2 transition-colors duration-200 group-hover:text-ctp-subtext1"
      >
        {description}
      </p>

      <div
        class="flex items-center text-xs text-ctp-overlay1 transition-colors duration-200 group-hover:text-ctp-overlay2 mb-3"
      >
        <CalendarDaysIcon class="me-1.5 size-3.5" />
        <span>{timePeriod}</span>
      </div>

      {#if skills.length > 0}
        <div class="flex flex-wrap gap-1.5">
          {#each skills as skill (skill)}
            <span
              class="text-xs font-medium px-2 py-0.5 rounded-sm {getSkillColor(skill)} bg-ctp-surface1/50"
            >
              {skill}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
