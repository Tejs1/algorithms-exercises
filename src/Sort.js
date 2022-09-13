import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let switched = false;
  do {
   switched = false;
  snapshot(nums);
    for(let i=0; i<nums.length; i++){
      if(nums[i] > nums[i+1]){
        const temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        switched = true
        snapshot(nums);
      }
    }
  }
  while (switched);
  return nums
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
