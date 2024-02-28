var Subjects;
(function (Subjects) {
    class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher}`;
            }
            else {
                return "No available teacher";
            }
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
