### Magneto -  Magnetic Fild Simulator
Lohmann, Douglas. Development and Evaluation of a Simulator for Electrostatic Teaching. 
- (C) Copyright 2016-2017 Douglas Lohmann <<dlohmann0@gmail.com>>.

### What is Magneto?  

Magneto is a simulator applied to electromagnetic content, which permits to obtain the magnetic field of the ring geometry and line, at any point in three-dimensional space.

### How to use
Instructions to use the simulator.
 - ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `In development`.

### For Developers ![#1589F0](https://placehold.it/15/1589F0/000000?text=+)
We believe that the development of a free and open-source simulator can contribute to the teaching-learning process of physics, in this way we are grateful for any contribution.

### Project Organization ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) 
This section describe the project organization in git and the internal directories. 

##### GIT 

This project has a git branching model using a `master` (stable version), and a `develop` (the current developing version) with main branches. When a bug is detected in a master version a new branch called `hotfixes` is open to fix the bug and then merge to master. 

New features are implemented with new branches from develop version. When we have a stable version of develop branch we create a `test` branch to make tests until merge to master.

In sumary we have the following branches:
* `master` (stable version).
    * `develop` (developing).
        * `new features` branches (add new features).
        * `test` (test version until merge to master).
    * `hotfixes` (Urgent bug fix in stable version).

It is recommended that new developers read the following websites before beginning the contribution:
* [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/);
* [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/).

##### Internal directories ![#c5f015](https://placehold.it/15/f03c15/000000?text=+)

This repository is organized according to the following structure:

* magneto
    * [Source files]() -code.   
    * [README.md](./README.md) - This tutorial.
    * [LICENSE](./LICENSE) - Project License.

* This three is not automatic generated, so the three is not complete and you should check on project diretory for more details.

### License and Maintainers 
Licenses:
 - Magneto is a free software that is under the GNU GENERAL PUBLIC LICENSE Version 3 license.
 
 Maintainers:
 - This implementation is maintained by Douglas Lohmann. Any questions or suggestions send him an email: <dlohmann0@gmail.com>.

 - This simulator was built with the help of Professor Dr. Cesar Vanderlei Deimling, all necessary support for understanding the physics principles were offered by him.

--------------------
##### LABELS
+ ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) - Tested.
+ ![#c5f015](https://placehold.it/15/f03c15/000000?text=+) - Developing.
+ ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) - Not tested.

> Last update by
Douglas Lohmann - 08-27-2017
