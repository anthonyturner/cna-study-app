import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

export interface CarePlanSkill {
  type: 'ADL' | 'Mobility' | 'Documentation';
  title: string;
  skillId: string;
}

export interface CarePlanSet {
  setNumber: number;
  skills: CarePlanSkill[];
}

@Component({
  selector: 'app-care-plan-sets',
  templateUrl: './care-plan-sets.html',
  styleUrl: './care-plan-sets.scss',
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatChipsModule]
})
export class CarePlanSets {
  readonly legendTypes: CarePlanSkill['type'][] = ['ADL', 'Mobility', 'Documentation'];

  typeIcon: Record<CarePlanSkill['type'], string> = {
    ADL: 'bathtub',
    Mobility: 'directions_walk',
    Documentation: 'edit_note'
  };

  typeColor: Record<CarePlanSkill['type'], string> = {
    ADL: '#1565C0',
    Mobility: '#2E7D32',
    Documentation: '#6A1B9A'
  };

  sets: CarePlanSet[] = [
    {
      setNumber: 1,
      skills: [
        { type: 'ADL',           title: 'Giving a Complete Bed Bath',                                    skillId: 'complete-bed-bath' },
        { type: 'Mobility',      title: 'Transferring From Bed to Wheelchair with One Assist',            skillId: 'bed-to-wheelchair-one-assist' },
        { type: 'Documentation', title: 'Measuring and Recording an Oral Temperature',                   skillId: 'oral-temperature' }
      ]
    },
    {
      setNumber: 2,
      skills: [
        { type: 'ADL',           title: 'Brushing Teeth',                                                skillId: 'brushing-teeth' },
        { type: 'Mobility',      title: 'Assisting with Ambulation',                                     skillId: 'assisting-ambulation' },
        { type: 'Documentation', title: 'Measuring and Recording Blood Pressure (Manual)',               skillId: 'manual-blood-pressure' }
      ]
    },
    {
      setNumber: 3,
      skills: [
        { type: 'ADL',           title: 'Making an Occupied Bed',                                        skillId: 'occupied-bed' },
        { type: 'Mobility',      title: 'Turning a Resident to a Side Lying Position',                   skillId: 'turning-side-lying-position' },
        { type: 'Documentation', title: 'Measuring and Recording a Height When Lying in Bed',            skillId: 'height-lying-in-bed' }
      ]
    },
    {
      setNumber: 4,
      skills: [
        { type: 'ADL',           title: 'Giving a Partial Bed Bath',                                     skillId: 'partial-bed-bath' },
        { type: 'Mobility',      title: 'Transferring From Bed to Wheelchair with Two Assists',           skillId: 'bed-to-wheelchair-two-assists' },
        { type: 'Documentation', title: 'Measuring and Recording a Rectal Temperature',                  skillId: 'rectal-temperature' }
      ]
    },
    {
      setNumber: 5,
      skills: [
        { type: 'ADL',           title: 'Providing Nail Care',                                           skillId: 'nail-care' },
        { type: 'Mobility',      title: 'Moving a Resident with a Lift Sheet',                           skillId: 'moving-with-lift-sheet' },
        { type: 'Documentation', title: 'Measuring and Recording Blood Pressure (Electronic)',           skillId: 'electronic-blood-pressure' }
      ]
    },
    {
      setNumber: 6,
      skills: [
        { type: 'ADL',           title: 'Shampooing the Resident\'s Hair',                               skillId: 'shampooing-hair' },
        { type: 'Mobility',      title: 'Transferring a Resident Using a Mechanical Lift',               skillId: 'mechanical-lift-transfer' },
        { type: 'Documentation', title: 'Measuring and Recording Height Using a Standing Scale',         skillId: 'height-standing-scale' }
      ]
    },
    {
      setNumber: 7,
      skills: [
        { type: 'ADL',           title: 'Shaving with a Disposable Safety Razor',                       skillId: 'shaving-safety-razor' },
        { type: 'Mobility',      title: 'Assisting with Ambulation using a Cane or Walker',             skillId: 'ambulation-cane-walker' },
        { type: 'Documentation', title: 'Measuring and Recording an Axillary Temperature',              skillId: 'axillary-temperature' }
      ]
    },
    {
      setNumber: 8,
      skills: [
        { type: 'ADL',           title: 'Giving a Shower or Tub Bath',                                  skillId: 'shower-tub-bath' },
        { type: 'Mobility',      title: 'Turning a Resident to a Side Lying Position',                  skillId: 'turning-side-lying-position' },
        { type: 'Documentation', title: 'Measuring and Recording Weight',                               skillId: 'measuring-weight' }
      ]
    },
    {
      setNumber: 9,
      skills: [
        { type: 'ADL',           title: 'Mouth Care for the Unconscious Resident',                      skillId: 'mouth-care-unconscious' },
        { type: 'Mobility',      title: 'Transferring From Bed to Wheelchair with One Assist',          skillId: 'bed-to-wheelchair-one-assist' },
        { type: 'Documentation', title: 'Measuring and Recording a Tympanic Temperature',              skillId: 'tympanic-temperature' }
      ]
    },
    {
      setNumber: 10,
      skills: [
        { type: 'ADL',           title: 'Providing Foot Care',                                          skillId: 'foot-care' },
        { type: 'Mobility',      title: 'Transferring From Bed to Wheelchair with Two Assists',         skillId: 'bed-to-wheelchair-two-assists' },
        { type: 'Documentation', title: 'Measuring and Recording Radial Pulse and Counting Respirations', skillId: 'radial-pulse-respirations' }
      ]
    },
    {
      setNumber: 11,
      skills: [
        { type: 'ADL',           title: 'Brushing and Combing Hair',                                    skillId: 'brushing-combing-hair' },
        { type: 'Mobility',      title: 'Transferring a Resident Using a Mechanical Lift',              skillId: 'mechanical-lift-transfer' },
        { type: 'Documentation', title: 'Measuring and Recording an Oral Temperature',                 skillId: 'oral-temperature' }
      ]
    },
    {
      setNumber: 12,
      skills: [
        { type: 'ADL',           title: 'Making an Unoccupied Bed',                                     skillId: 'unoccupied-bed' },
        { type: 'Mobility',      title: 'Assisting with Ambulation using a Cane or Walker',            skillId: 'ambulation-cane-walker' },
        { type: 'Documentation', title: 'Measuring and Recording Blood Pressure (Manual)',             skillId: 'manual-blood-pressure' }
      ]
    }
  ];
}
