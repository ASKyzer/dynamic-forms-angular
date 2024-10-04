import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormVisibilityService {
  constructor() {}

  updateVisibility(config: any, form: any) {
    config.sections.forEach((section: any) => {
      section.isVisible = this.isSectionVisible(section, form);
      section.rows.forEach((row: any) => {
        row.isVisible = this.isRowVisible(row, form);
        row.fields.forEach((field: any) => {
          field.isVisible = this.isFieldVisible(field, form);
        });
      });
    });
  }

  isSectionVisible(section: any, form: any): boolean {
    if (section.conditions) {
      return section.conditions.every((condition: any) =>
        this.evaluateCondition(condition, form)
      );
    }
    return section.condition
      ? this.evaluateCondition(section.condition, form)
      : true;
  }

  isRowVisible(row: any, form: any): boolean {
    if (row.conditions) {
      return row.conditions.every((condition: any) =>
        this.evaluateCondition(condition, form)
      );
    }
    return row.condition ? this.evaluateCondition(row.condition, form) : true;
  }

  isFieldVisible(field: any, form: any): boolean {
    if (field.conditions) {
      return field.conditions.every((condition: any) =>
        this.evaluateCondition(condition, form)
      );
    }
    return field.condition
      ? this.evaluateCondition(field.condition, form)
      : true;
  }

  evaluateCondition(condition: any, form: any): boolean {
    const { field, operator, value } = condition;
    const fieldValue = form.get(field)?.value;

    switch (operator) {
      case '==':
        return fieldValue == value;
      case '!=':
        return fieldValue != value;
      case '>':
        return fieldValue > value;
      case '<':
        return fieldValue < value;
      case '>=':
        return fieldValue >= value;
      case '<=':
        return fieldValue <= value;
      case 'in':
        return Array.isArray(value) && value.includes(fieldValue);
      default:
        return true;
    }
  }
}
