import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Axis Bank',
      role: 'Deputy Manager – IT Strategy & Infrastructure',
      period: 'June 2024 – Present',
      tags: ['Strategy', 'Infrastructure', 'BCDR', 'Risk Management'],
      description: 'Lead enterprise strategy and planning initiatives for Infrastructure Resilience and Disaster Recovery. Act as a strategic liaison between infrastructure, security, and leadership teams to translate technical data into executive insights.',
      color: 'from-green-600/40 to-emerald-900/40'
    }
  ];
}
