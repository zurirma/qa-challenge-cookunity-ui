export function generateUniqueEmail() {
    const timestamp = Date.now();
    return `qa.test+${timestamp}@yopmail.com`;
  }
  