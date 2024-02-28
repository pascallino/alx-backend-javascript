var Subjects;
(function (Subjects) {
    class React extends Subject {
        getRequirements() {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher}`;
            }
            else {
                return "No available teacher";
            }
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
