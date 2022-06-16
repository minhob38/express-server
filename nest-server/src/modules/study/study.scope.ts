import { Injectable, Scope } from '@nestjs/common';

// @Injectable({ scope: Scope.REQUEST })
// @Injectable() ?
// @Injectable({ scope: Scope.DEFAULT })
// @Injectable({ scope: Scope.TRANSIENT })
export class StudyScope {
  arr = [];

  push(item) {
    this.arr.push(item);
    console.log(this.arr);
  }
}
