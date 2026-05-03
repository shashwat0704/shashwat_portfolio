import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise BCDR Strategy',
      company: 'Axis Bank',
      description: 'Defined and managed end-to-end BCDR strategy for 600+ critical applications, ensuring 100% compliance with ISO 22301 and RBI regulations.',
      tags: ['Strategy', 'BCDR', 'Compliance'],
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'AI-Driven Transformation',
      company: 'Axis Bank',
      description: 'Led automation initiatives integrating chatbots and intelligent workflows, reducing manual intervention by 45% and reporting effort by 40%.',
      tags: ['AI', 'Automation', 'Power Automate'],
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Infrastructure Resilience Planning',
      company: 'Axis Bank',
      description: 'Planned and governed 300+ Disaster Recovery drills, improving drill success rate and reporting turnaround by 20%.',
      tags: ['Infrastructure', 'Planning', 'DR Drills'],
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];
}
