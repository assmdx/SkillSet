# SkillSet
A simple JSON format for skill sets and a mind map generator

[Demo](https://www.ilovegirl.top/SkillSet/)

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
    "web System":{
      "front-end":{
        "UI":{
          "html":1,
          "css":1
        },
        "framework":{
          "build":{
            "webpack":1
          },
          "develop":{
            "vue":1,
            "react":1
          }
        },
        "language":{
          "es6":1
        }
      },
      "server":{
        "framework":{
          "egg":1,
          "express":1,
          "hapi":1,
          "C# webApi":1
        },
        "database":{
          "mongodb":2,
          "redis":1,
          "mysql":2
        }
      },
      "connect Server And front-end":{
        "graphql":1,
        "RESTfulApi":1
      },
      "deploy":{
        "docker":1
      }
    },
    "version control tools": {
      "Git": 2,
      "svn": 1
    },
    "mobile App":{
      "cordova":1
    },
    "desktop App":{
      "Electron":1
    }
  }
}




```

### Generated Mind Map

![skill-set.png](docs/skill-set1.png)
