const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Complete report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2025-02-25",
        "category": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "taskDate": "2025-02-26",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Code review",
        "taskDescription": "Review the latest pull request from team members.",
        "taskDate": "2025-02-27",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Client presentation",
        "taskDescription": "Prepare slides for the client meeting.",
        "taskDate": "2025-02-28",
        "category": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs reported by QA.",
        "taskDate": "2025-02-29",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Documentation update",
        "taskDescription": "Update project documentation.",
        "taskDate": "2025-03-01",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Sandeep",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Testing new feature",
        "taskDescription": "Test the new module before release.",
        "taskDate": "2025-03-02",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Daily standup",
        "taskDescription": "Attend daily standup meeting.",
        "taskDate": "2025-03-03",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Performance optimization",
        "taskDescription": "Optimize slow-performing queries.",
        "taskDate": "2025-03-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Security check",
        "taskDescription": "Conduct a security audit on the application.",
        "taskDate": "2025-03-05",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Code refactoring",
        "taskDescription": "Refactor legacy codebase for efficiency.",
        "taskDate": "2025-03-06",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "API integration",
        "taskDescription": "Integrate third-party API services.",
        "taskDate": "2025-03-07",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Training session",
        "taskDescription": "Conduct a training session for new hires.",
        "taskDate": "2025-03-08",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "System maintenance",
        "taskDescription": "Perform scheduled maintenance on servers.",
        "taskDate": "2025-03-09",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "User feedback review",
        "taskDescription": "Analyze user feedback and prepare a report.",
        "taskDate": "2025-03-10",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    // "firstName": "Ravi",
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) { 
    localStorage.setItem("employees", JSON.stringify(employees));  // ✅ Only set if empty
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// ✅ Fetch latest employees and admin from localStorage
export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || employees,
    admin: JSON.parse(localStorage.getItem("admin")) || admin
  };
};

// ✅ Update localStorage with new task data
export const updateLocalStorage = (updatedEmployees) => {
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));  // ✅ Keep tasks
};
   