import React from 'react';
import PropTypes from 'prop-types';
import styles from './C_comp.module.css';
import Pageno from "../Pageno/Pageno";
const C_comp = () => (
  <div className={styles.C_comp}>
  <Pageno  homepage="/c" page1_comp={page1} page2_comp={page2} page3_comp={page3}/>
  </div>
);
const page1=()=>
(
<div id="page1" >
<div className={styles.divoddtop} >
<Constant_pointer />
<Pointer_array />

</div>
<div className={styles.diveventop} >

<TwoD />
</div>
</div>




);

const TwoD=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>2D array pointer interpretation</h3>
              <p > They 2D array  can be interpreted with pointers in 2 ways
              <ul>
               <li><span className={styles.mark}>using 2d array and pointer dereference</span> < br/>A 2D array is not stored as a table
               in memory instead, it 
              is stored as a single row following a row major / column major approach.
               	Each row is a pointer to array like int (*) ptr[m]. so ptr++ will move to next row.
               		for example consider < br/>< br/>
             int arr[2][2]=[[1,2],[3,4]];< br/>< br/>
              now each row is int (*) ptr[2];< br/>< br/>
               now ptr++ goes to second row. (ptr++)*+1 goes to second row second column.
              now to get the value, dereference it using *. That is,
               ((ptr++)*+1)* gives 4. arr will hold the address of ptr and ptr holds tthe address 
               of the 1d array. so *arr will give the address of 1d array that the ptr has. Now, **ptr 
              gives the value of first index that is 0,0.< br/> To generalise the equation ,
               *(*(arr+i)+j) = arr[i][j]


                                                                  
              </li>< br/>
              <li><span className={styles.mark}>using  array and single pointer </span>< br/> An array can also be stored using a single pointer.
               For example< br/>< br/> int *p=malloc(sizeof(int) *4) creates an array of size 4.
              < br/>< br/>Now p++ moves across the index of the 1D array.
              to get the value in index, use *(ptr) or *(ptr+index_needed)
             < br/> Similarly, one can use a single pointer to store a 2D array as well.
              consider the p variable above. To store a 2d array in a single pointer, do as follows
             < br/> < br/>int * arr=(int *) malloc(sizeof(int) *row_count * col_count);
            < br/> < br/> since, all the r * c elements are stored in a single row, u can access arr[i][j] where the total row is 50 and 
              total column is 60  as
            < br/> < br/> *(arr+ (60 * i )+(j))




              </li>< br/>
               <li><span className={styles.mark}>using  2D array and double pointer </span> < br/> One can also use a double 
               pointer to represent a 2D array.
              Consider the following example:
              < br/>< br/>
              int * col=(int *)malloc(sizeof(int) * cols)
              < br/>< br/>
              int **row=(int **)malloc(sizeof(int *) * rows )
              < br/>< br/>
              While i &lt; row_count < br/>
              
              	row_count PLUS i= address of col;< br/>< br/>
              
              to access elements i,j use
               *(*(row_count+i)+j)





              </li>
                < br/>
              </ul>
           
              Now you can see that the double pointer implementation and 
              the subscript based implementation (int arr[2][2] done above in the first point)are almost same. 
 
              
              </p>
              </div>
	);

const Constant_pointer=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Constant & Pointers</h3>
              <p > They keyword constant can be used with pointers in 2 ways
              <ul>
               <li><span className={styles.mark}>Constant Pointer :</span>< br/> < br/>int * const p=&b;< br/>p=&c;
                                                                             < br/> < br/>Here the pointer is of type constant.
                                                                              So, p=&c will throw an error. You cannot change the value of the
                                                                              pointer. But, can change the value of the pointer's value.
              </li>< br/>

              <li><span className={styles.mark}>Pointer to constant :</span>< br/>< br/>const int *p=&b;< br/>*p++;
 																		    < br/>< br/>Here, it a pointer to a constant variable. The variable b may or may not
 																		    be a constant variable. But, using a pointer to constant, this pointer gets read 
 																		    only permission of variable b.


              </li>
              < br/>
                
              </ul>
              Likewise, An array when passed to a function decays into a constant pointer so that, 
              the base address of the array that the constant pointer points to cannot be changed in the called 
              function.
              </p>
              </div>
	);
 
	const Pointer_array=()=>
	{
		return (


              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Array and Pointers</h3>
              <p > There are two ways by which an array can be related with pointers.
              <ul>
               <li><span className={styles.mark}>Array of pointers :</span>< br/>< br/>
                                                          int arr[]={1,2,3,4,5};< br/>
                                                          int *ptr[5];< br/>
                                                          ptr[0]=&arr[0];< br/>
                                                          ptr[1]=&arr[1];< br/>< br/>
                                                          here the ptr stores the address of other variables in its index.
               </li> < br/>
              <li><span className={styles.mark}>Pointer to an array :</span>< br/>< br/>
              											  int arr[5]={1,2,3,4,5};< br/>
                                                          int (*) ptr[5]=&arr;< br/>< br/>
                                                          suppose the base address of arr is 2000, then ptr++
                                                          will be 2000+5 x 4= 2020.

              </li>< br/>
              <li><span className={styles.mark}>Integer Pointer to an array :</span>< br/>< br/>
              											  int arr[5]={1,2,3,4,5};< br/>
                                                          int  *ptr=arr;< br/>< br/>
                                                          Now ptr holds the address of the 1st array element.
                                                          suppose the base address of arr is 2000, then ptr++
                                                          will be 2000+4= 2004.

              </li>< br/>
     
           
         </ul>
              </p>
              </div>
	);
}
const page2=()=>
 (   
<div id="page1" >
<div className={styles.divoddtop} >
<Segments />

</div>
<div className={styles.diveventop} >
<Str />

</div>
</div>
);
const Str=()=>
	{
		return (


              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>String and Segments</h3>
              <p > Strings get stored in different segments according the type of declaration and Initialision.
              <ul>
              
              <li><span className={styles.mark}>char * arr="computer"</span>< br/>
               This method of Initialisation gets stored read only data segment.< br/><br />
               *(arr+1)='c';
               <br />
               will throw an error.
               arr can be changed to point to any other address. But the value at the address of 'c' cant be changed.

              											 

              </li>< br/>
              <li><span className={styles.mark}>char * str=(char *)malloc(4*sizeof(char))</span>< br/>
              Now,the memory created is stored in the heap. Hence, it is available between functions.


              											  

              </li>< br/>
               <li><span className={styles.mark}>char arr[4]="pc"</span>< br />
              Here, the "pc" is stored in stack segment which is a read/write segment. But, will not be available between functions.

               </li> < br/>
              <li><span className={styles.mark}>Code segment</span>< br/>
              This is the place where the compiled code sits and works ! It is also called as the text segment.
              											  

              </li>
     
           
         </ul>
              </p>
              </div>
	);
}


const Segments=()=>
	{
		return (


              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Segments and variables</h3>
              <p > The memory is partitioned into various segments where the programming variables are stored. They are
              as follows.
              <ul>
              
              <li><span className={styles.mark}>Data segment</span>< br/>
               The data segment is further divided into two sub segments 
               <li><span className={styles.mark}>Uninitialised D-Segment</span> All the Uninitialised global,static and pointer variables are stored here</li>
               <li><span className={styles.mark}>Initialised D-Segment</span> All the Initialised global,static and pointer variables are stored here. It is further divided into 2 sub segements
               <li><span className={styles.mark}>Read-only</span></li>
               <li><span className={styles.mark}>Read Write</span></li>
               </li>


              											 

              </li>< br/>
              <li><span className={styles.mark}>heap segment</span>< br/>
              All the dynamically allocated memory such as malloc(), new et cetera are stored. They remain in this place till
              they are removed by the user or garbage collector in java.

              											  

              </li>< br/>
               <li><span className={styles.mark}>Stack Segment</span>< br />
               All the local variables of a function ( except those created dynamically 
               and static variables) are stored in this segment.

               </li> < br/>
              <li><span className={styles.mark}>Code segment</span>< br/>
              This is the place where the compiled code sits and works ! It is also called as the text segment.
              											  

              </li>
     
           
         </ul>
              </p>
              </div>
	);
}




const page3=()=>
 (   
<div id="page1" >
<Constant_pointer />

</div>
);








C_comp.propTypes = {};

C_comp.defaultProps = {};

export default C_comp;
