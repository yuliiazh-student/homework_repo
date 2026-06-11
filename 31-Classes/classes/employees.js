class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employeesArray) {
    this.employees = employeesArray; 
  }

  getHtml() {
    let html = `
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: left; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px;">Ім'я</th>
            <th style="padding: 8px;">Посада</th>
            <th style="padding: 8px;">Зарплата</th>
          </tr>
        </thead>
        <tbody>
    `;

    for (let emp of this.employees) {
      html += `
        <tr>
          <td style="padding: 8px;">${emp.name}</td>
          <td style="padding: 8px;">${emp.position}</td>
          <td style="padding: 8px;">${emp.salary} грн</td>
        </tr>
      `;
    }

    html += `
        </tbody>
      </table>
    `;

    return html;
  }
}
