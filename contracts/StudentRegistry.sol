// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentRegistry {
    struct Student {
        string name;
        uint age;
    }

    mapping(uint => Student) public students;

    function addStudent(
        uint id,
        string memory name,
        uint age
    ) public {
        students[id] = Student(name, age);
    }

    function getStudent(uint id)
        public
        view
        returns (string memory, uint)
    {
        return (students[id].name, students[id].age);
    }
}