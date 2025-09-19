import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})


export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  stats: StatItem[] = [
    { value: 500, label: 'Properties Sold', suffix: '+' },
    { value: 1200, label: 'Happy Clients', suffix: '+' },
    { value: 15, label: 'Years Experience', suffix: '+' },
    { value: 50, label: 'Expert Agents', suffix: '+' }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Michael Johnson',
      role: 'Founder & CEO',
      description: 'With over 20 years in real estate, Michael leads Aizen with a passion for innovation and client satisfaction.',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Sales',
      description: 'Sarah\'s expertise in luxury properties and negotiation has helped hundreds of clients achieve their real estate goals.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Rodriguez',
      role: 'Technology Director',
      description: 'David ensures our platform stays cutting-edge, making property search and management effortless for our clients.',
      avatar: '👨‍💻'
    }
  ];

  features: Feature[] = [
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Over 15 years of successful transactions and satisfied clients speak to our expertise and reliability in the real estate market.'
    },
    {
      icon: '🔍',
      title: 'Market Expertise',
      description: 'Deep local knowledge and market insights help you make informed decisions whether buying, selling, or renting.'
    },
    {
      icon: '💻',
      title: 'Technology-Driven',
      description: 'Our advanced platform provides virtual tours, detailed analytics, and seamless communication throughout your journey.'
    },
    {
      icon: '🤝',
      title: 'Personalized Service',
      description: 'Every client receives tailored attention and customized solutions that align with their unique needs and preferences.'
    },
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Streamlined processes and dedicated support ensure quick turnarounds without compromising on quality or attention to detail.'
    },
    {
      icon: '🛡️',
      title: 'Trusted & Secure',
      description: 'Full transparency, secure transactions, and comprehensive legal support give you peace of mind throughout the process.'
    }
  ];

  private observer!: IntersectionObserver;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.initializeStatsAnimation();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  private initializeStatsAnimation(): void {
    const statsElements = document.querySelectorAll('.stat-value');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const statIndex = parseInt(target.dataset['index'] || '0');
          const stat = this.stats[statIndex];

          if (stat) {
            this.animateValue(target, 0, stat.value, 2000, stat.suffix);
            this.observer.unobserve(target);
          }
        }
      });
    }, { threshold: 0.5 });

    statsElements.forEach(element => {
      this.observer.observe(element);
    });
  }

  private animateValue(element: HTMLElement, start: number, end: number, duration: number, suffix: string = ''): void {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  }
}
