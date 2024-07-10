import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
export interface CourseState {
  courseInfo: any;
  category: any;
  filtercategory: any;
  getdata: any;
  getid: any;
}

const initialState: CourseState = {
  courseInfo: {},
  category: {},
  filtercategory: [],
  getid: null,
  getdata: null,
};

export const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getcourse: (state, action: PayloadAction<any>) => {
      state.courseInfo = action.payload;
      console.log("ACTIONPLAYLOAD !!!!!!!!", action.payload);
      state.filtercategory = action.payload.data;
    },
    setFilterCategory: (state, action: PayloadAction<any>) => {
      state.filtercategory = action.payload;
      const id = action.payload;
      // console.log("filterd data action", id);

      const coursedata = current(state.courseInfo?.data);
      // console.log("Course data!!!!!!!!! ", coursedata);

      const fi = coursedata?.filter((i: any) => i.categoryType?._id === id);
      // console.log("filyers @@@", fi);
      // console.log(i.categoryType?._id)
      state.filtercategory = fi;
    },
    getfilterdata: (state, action: PayloadAction<any>) => {
      state.getdata = action.payload;
      console.log("action data from filterdata", action.payload);
    },
    getCategory: (state, action: PayloadAction<any>) => {
      state.category = action.payload;
    },
    getid: (state, action: PayloadAction<any>) => {
      state.getid = action.payload;
      console.log("gbhhybfdhjhbfb,jh",action.payload)
    },
  },
});

export const { getcourse, getCategory, setFilterCategory, getfilterdata,getid } =
  CourseSlice.actions;
export default CourseSlice.reducer;
