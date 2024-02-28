"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.react = exports.java = exports.cpp = void 0;
const cteacher = {
    firstName: 'Pascal',
    lastName: 'Ojukwu',
    experienceTeachingC: 10,
};
exports.cpp = new Subjects.Cpp();
console.log('c++');
exports.cpp.setTeacher(cteacher);
exports.cpp.getRequirements();
exports.cpp.getAvailableTeacher();
exports.java = new Subjects.Java();
console.log('java');
exports.cpp.setTeacher(cteacher);
exports.cpp.getRequirements();
exports.cpp.getAvailableTeacher();
exports.react = new Subjects.React();
console.log('react');
exports.cpp.setTeacher(cteacher);
exports.cpp.getRequirements();
exports.cpp.getAvailableTeacher();
