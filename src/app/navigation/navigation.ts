import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ElementRef, ViewChild, Renderer2, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { Router } from 'express';





@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})

export class Navigation implements AfterViewInit, OnDestroy {
  isMenuOpen = false;

  // references to elements in the template
  @ViewChild('menuBtn', { read: ElementRef }) menuBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('menu', { read: ElementRef }) menu!: ElementRef<HTMLElement>;

  // store unlisten functions so we can remove listeners on destroy
  private unlistenDocumentClick?: () => void;
  private unlistenEscape?: () => void;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Listen to document clicks to detect "click outside".
    this.unlistenDocumentClick = this.renderer.listen('document', 'click', (event: Event) => {
      // If menu is closed, nothing to do
      if (!this.isMenuOpen) return;

      const clickedInsideMenu = this.menu?.nativeElement.contains(event.target as Node);
      const clickedMenuBtn = this.menuBtn?.nativeElement.contains(event.target as Node);

      // If click is outside both the menu and the button, close the menu
      if (!clickedInsideMenu && !clickedMenuBtn) {
        this.closeMenu();
      }
    });

    // Optional: close on Escape key
    this.unlistenEscape = this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.unlistenDocumentClick) this.unlistenDocumentClick();
    if (this.unlistenEscape) this.unlistenEscape();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
