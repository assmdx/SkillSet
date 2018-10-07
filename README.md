# SkillSet
A simple JSON format for skill sets and a mind map generator

[Demo](http://nexzhu.github.io/SkillSet/)

## Background

Initially created to help me choose technology stacks for 2015 Eleme Hackathon according to the skill sets of my teammates and me.

SkillSet can also be used to communicate skill sets and skill requirements between employers and job seekers, or to help leaders optimize assignment of tasks to teams.

SkillSet uses [Baidu FEX team](http://fex.baidu.com/)'s [Kity](https://github.com/fex-team/kity) and [KityMinder Core](https://github.com/fex-team/kityminder-core) to generate mind maps.

## Skill Levels

    1: Novice
    2: Intermediate
    3: Advanced
    4: Expert
    5: Master

## Example

### JSON

```json
{
  "name": "assmdx",
  "skillset": {
    "es6": {
      "nodejs": {
        "egg.js": 2,
        "express": 2,
        "hapi.js": 1
      },
      "database": {
        "mongodb": 2,
        "redis": 1
      },
      "scoket.io": 1,
      "RegExp": 1,
      "hybirdApp": {
        "cordova": 1
      },
      "front-end": {
        "html":2,
        "css":1,
        "vue": 1,
        "react": 1,
        "webpack": 1
      },
      "nativeApp": {
        "electron": 1
      }
    },
    "java": 1,
    "C#": {
      "RESTful API": 1
    },
    "C": 1,
    "C++": 1,
    "algorithm": 1,
    "version control tools": {
      "Git": 2,
      "svn": 1
    },
    "linux": {
      "docker": 2
    },
    "python": 1
  }
}



```

### Generated Mind Map

![skill-set.png](docs/skill-set1.png)
