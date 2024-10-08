import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  findFieldsWithConditions(config: any[]): any[] {
    return config.reduce((acc: any[], item: any) => {
      if (item.conditions && Object.keys(item.conditions).length > 0) {
        acc.push(item);
      }

      if (item.rows && Array.isArray(item.rows)) {
        acc.push(...this.findFieldsWithConditions(item.rows));
      }

      if (item.fields && Array.isArray(item.fields)) {
        acc.push(...this.findFieldsWithConditions(item.fields));
      }

      return acc;
    }, []);
  }

  isSectionVisible(section: any, form: any): boolean {
    return this.evaluateConditions(section.conditions, form);
  }

  isRowVisible(row: any, form: any): boolean {
    return this.evaluateConditions(row.conditions, form);
  }

  isFieldVisible(field: any, form: any): boolean {
    if (!field.conditions) {
      return true;
    }

    if (field.conditions.or) {
      return this.checkOrConditions(field.conditions.or, form);
    }

    return this.evaluateConditions(field.conditions, form);
  }

  private checkOrConditions(conditions: any[], form: FormGroup): boolean {
    return conditions.some((condition) => {
      const fieldValue = form.get(condition.field)?.value;
      switch (condition.operator) {
        case '==':
          return fieldValue === condition.value;
        case '!=':
          return fieldValue !== condition.value;
        // ... add other operators as needed ...
        default:
          return false;
      }
    });
  }

  evaluateConditions(conditions: any, form: any): boolean {
    if (!conditions) return true;

    if (conditions.operator && conditions.conditions) {
      // Handle complex conditions with 'and' or 'or' operators
      if (conditions.operator.toUpperCase() === 'AND') {
        return conditions.conditions.every((condition: any) =>
          this.evaluateCondition(condition, form)
        );
      } else if (conditions.operator.toUpperCase() === 'OR') {
        return conditions.conditions.some((condition: any) =>
          this.evaluateCondition(condition, form)
        );
      }
    } else if (Array.isArray(conditions)) {
      // Treat array of conditions as 'AND' for backwards compatibility
      return conditions.every((condition) =>
        this.evaluateCondition(condition, form)
      );
    } else {
      // Single condition object
      return this.evaluateCondition(conditions, form);
    }

    return true; // Default to true if no valid condition structure is found
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
