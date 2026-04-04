import { Directive, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appGlossaryTooltip]',
  standalone: true
})
export class GlossaryTooltipDirective implements OnDestroy {
  private tooltip: HTMLDivElement | null = null;
  private currentTerm: HTMLElement | null = null;

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent): void {
    const term = (event.target as HTMLElement).closest?.('.gl-term') as HTMLElement | null;
    if (!term) { this.hide(); return; }
    if (term === this.currentTerm) return;
    const def = term.getAttribute('data-def');
    if (!def) return;
    this.show(def, term);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hide();
  }

  private show(text: string, anchor: HTMLElement): void {
    this.hide();
    this.currentTerm = anchor;

    const el = document.createElement('div');
    el.className = 'gl-tooltip';
    el.textContent = text;
    document.body.appendChild(el);
    this.tooltip = el;

    requestAnimationFrame(() => {
      if (!this.tooltip) return;
      const rect = anchor.getBoundingClientRect();
      const tw = this.tooltip.offsetWidth;
      const th = this.tooltip.offsetHeight;

      // position: fixed — use viewport-relative coords directly (no scroll offsets)
      let top  = rect.top - th - 10;
      let left = rect.left + rect.width / 2 - tw / 2;

      // Flip below the term if too close to top of viewport
      if (top < 8) top = rect.bottom + 10;

      // Clamp horizontally so it stays on screen
      left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

      this.tooltip.style.top  = `${top}px`;
      this.tooltip.style.left = `${left}px`;
      this.tooltip.classList.add('gl-tooltip--visible');
    });
  }

  private hide(): void {
    this.tooltip?.remove();
    this.tooltip = null;
    this.currentTerm = null;
  }

  ngOnDestroy(): void {
    this.hide();
  }
}
