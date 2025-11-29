<script lang="ts">
  interface Props {
    name: string;
    description: string;
    additionalText?: string;
  }

  let { name, description }: Props = $props();
</script>

<section class="mb-12">
  <h1 class="text-2xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
    <span class="text-ctp-subtext0">Hey! I'm&nbsp;</span><span class="accent"
      >{name}</span
    >
  </h1>

  <div class="max-w-2xl space-y-4">
    <p class="text-base text-ctp-text leading-relaxed font-medium">
      {@html description}
    </p>
  </div>
</section>
