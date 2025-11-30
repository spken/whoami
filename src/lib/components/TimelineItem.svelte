<script lang="ts">
  import * as Avatar from "./ui/avatar";
  import * as HoverCard from "./ui/hover-card";
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

  const catppuccinColors = [
    { text: "text-ctp-red", bg: "bg-ctp-red/15" },
    { text: "text-ctp-peach", bg: "bg-ctp-peach/15" },
    { text: "text-ctp-yellow", bg: "bg-ctp-yellow/15" },
    { text: "text-ctp-green", bg: "bg-ctp-green/15" },
    { text: "text-ctp-teal", bg: "bg-ctp-teal/15" },
    { text: "text-ctp-sky", bg: "bg-ctp-sky/15" },
    { text: "text-ctp-sapphire", bg: "bg-ctp-sapphire/15" },
    { text: "text-ctp-blue", bg: "bg-ctp-blue/15" },
    { text: "text-ctp-lavender", bg: "bg-ctp-lavender/15" },
    { text: "text-ctp-mauve", bg: "bg-ctp-mauve/15" },
    { text: "text-ctp-pink", bg: "bg-ctp-pink/15" },
  ];

  function getRandomColor(seed: string): { text: string; bg: string } {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return catppuccinColors[Math.abs(hash) % catppuccinColors.length];
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
      <HoverCard.Root openDelay={0} closeDelay={100}>
        <HoverCard.Trigger>
          <a
            class="inline-block cursor-pointer"
            {...link
              ? { href: link, target: "_blank", rel: "noopener noreferrer" }
              : {}}
          >
            <h3
              class="font-semibold text-lg mb-1 transition-colors duration-200"
            >
              <span class="accent-color hover:underline">{name}</span>
              {#if past}<span class="text-ctp-overlay0"> (past)</span>{/if}
            </h3>
          </a>
        </HoverCard.Trigger>
        {#if skills.length > 0}
          <HoverCard.Content class="w-80">
            <div class="flex justify-between space-x-4">
              <Avatar.Root>
                {#if logo}
                  <Avatar.Image src={logo} />
                {/if}
                <Avatar.Fallback>{fallback}</Avatar.Fallback>
              </Avatar.Root>
              <div class="space-y-1 flex-1">
                <h4 class="text-sm font-semibold accent-color">{name}</h4>
                <div class="flex flex-wrap gap-1.5 pt-2">
                  {#each skills as skill (skill)}
                    {@const colors = getRandomColor(skill)}
                    <span
                      class="text-xs font-bold px-2 py-1 rounded-sm {colors.text} {colors.bg}"
                    >
                      {skill}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </HoverCard.Content>
        {/if}
      </HoverCard.Root>

      <p
        class="text-sm text-ctp-subtext0 mb-2 transition-colors duration-200 group-hover:text-ctp-subtext1"
      >
        {description}
      </p>

      <div
        class="flex items-center text-xs text-ctp-overlay1 transition-colors duration-200 group-hover:text-ctp-overlay2"
      >
        <CalendarDaysIcon class="me-1.5 size-3.5" />
        <span>{timePeriod}</span>
      </div>
    </div>
  </div>
</div>
