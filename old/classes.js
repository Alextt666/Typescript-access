"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    ;
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfomation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        return _super.call(this, id, 'IT') || this;
    }
    ITDepartment.prototype.describe = function () {
        console.log(this.name);
    };
    return ITDepartment;
}(Department));
var IT = new ITDepartment('d2', ['alex', 'miki']);
IT.describe();
IT.addEmployee('alex');
IT.addEmployee('miki');
IT.printEmployeeInfomation();
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReports = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReports) {
                return this.lastReports;
            }
            throw new Error('No report Found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('please pass in a valid value!');
            }
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("The Department ID is ".concat(this.id));
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'alex') {
            return;
        }
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReports = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var Accounting = new AccountingDepartment('d2', []);
Accounting.addReports('D1 something...');
Accounting.mostRecentReport = 'YEAR END REPORT';
console.log(Accounting.mostRecentReport);
Accounting.printReports();
