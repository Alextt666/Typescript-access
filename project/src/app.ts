class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById('app') as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;
    this.configure();
    this.attch();
  }
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert('Invalid input , please try again');
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }
  // 创建一个 发送处理函数
  private submitHandler(event: Event) {
    event.preventDefault();
    // 获取所有用户输入
    const userInput = this.gatherUserInput();
  }
  // 创建一个 监听 发送的事件
  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }
  private attch() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}
const prjInput = new ProjectInput();
