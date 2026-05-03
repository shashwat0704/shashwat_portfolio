import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css'
})
export class TechSkillsComponent {
  skillGroups = [
    {
      category: 'Strategic Tools',
      skills: ['Infrastructure Resilience', 'BCDR Strategy', 'Risk Management', 'BIA', 'RCSA']
    },
    {
      category: 'Automation & Data',
      skills: ['Power Automate', 'SharePoint', 'AI Chatbots', 'Workflow Automation', 'SQL', 'Microsoft Excel', 'Python (Jupyter)']
    },
    {
      category: 'Design & Governance',
      skills: ['Microsoft Visio', 'Process Design', 'SOP Development', 'KPI Tracking', 'BRD Preparation']
    },
    {
      category: 'Core Engineering',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'VS Code', 'Agile Methodology']
    }
  ];
}
