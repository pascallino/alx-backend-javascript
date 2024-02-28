var Subjects;
(function (Subjects) {
    class Java extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher}`;
            }
            else {
                return "No available teacher";
            }
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
