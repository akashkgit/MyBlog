

import linux from"../../img/linux.jpeg";
import React from 'react';
import code1 from "../../img/code1.png";
import PropTypes from 'prop-types';
import styles from './Os_comp.module.css';
import Pageno from "../Pageno/Pageno";

const Os_comp = () => (
  <div className={styles.Os_comp}>
     <Pageno  homepage="/os" page1_comp={page1} page2_comp={page2} page3_comp={page3}/>
  </div>
);
const page1=()=>(
	<div id="page1" >
    <div className={styles.divoddtop} >
	<ModenCall />
	<OsSimplified />
	<OsTypes />
	<Linux />
	<Process1 />
	
	</div>
	<div className={styles.diveventop} >
    <Threads />
    <ThreadTypes />
    <Threadsjoin />
    <ThreadPattern />
    <Calls />
    <Mutex />
    <Locality />


	</div>
	





</div>

	);


	const ModenCall=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Mode & Call</h3>
              <p > Operating system has two modes.<br /><ul><li>User Mode</li><li>Priveleged Mode</li></ul>
              
              A mode bit in Cpu tracks this mjode. When control has to transfered from user mode to priveleged mode,
               A <span className={styles.mark}>system call </span>is made such as send(),recv() et cetera. During the system call, control is 
               transfered to the kernel. There are two types of system call.
               <ul>
               <li > Synchronous call </li>
               <li>  Asynchronous call</li>
               </ul> 
               This transaction is not cheap and affects cache!
              </p>
              </div>
	)
	const OsSimplified=()=>(
	<div className={styles.divodd}>
              <h3 className={styles.headingodd}>OS Simplified</h3>
              <p > 
              <ul>
              <li> <span className={styles.mark} >Abstraction</span>:Process,Socket (i,e) They simplify the representation of underlying hardware like CPU,NIC etc. </li>
              <li> <span className={styles.mark} >Mechanism</span>: create,allocate,destroy et cetera.        </li>
              <li> <span className={styles.mark} >Policy</span>:LRU,LFU et cetera         </li>
              </ul>
              </p>
              </div>


	);

const OsTypes=()=>(
	<div className={styles.divodd}>
              <h3 class="headingodd">Types of OS</h3>
              
              <p> 
                There are two types of OS.
                <ol>
                <li><span className={styles.mark} >Modular OS </span> This type of OS installs modules as per the need of the application.
                For example, it installs filesystem when a database application is being run.</li> 
                <li><span className={styles.mark} >Monolithic OS </span> Here, All the services are pre installed in the Operating System.</li>
                <li><span className={styles.mark} >Micro Kernel </span> In other types of OS, All the services are handled by the kernel. In this type, the services are divided into 
                1. User services(Not so important)  2.Kernel Service(Not so important). So, any user application requiring user services will communicate with user services in user 
                address space through message passing. Since, the kernel handles less no. of services, it can work faster.
                </li>
                </ol>
                
              </p>
              </div>


	);
	const Linux=()=>(
	<div className={styles.divodd}>
              <h3 class="headingodd">Linux Architecture</h3>
              
              <img src={linux} className={styles.img}  />
              </div>


	);
	
	
	const Process1=()=>(
	<div className={styles.divodd}>
              <h3 class="headingodd">Process</h3>
              
              <p> 
                A proces is an installed active program like MS word,notepad et cetera. These process has a virtual memery address that points to a 
               physical memory location in the RAM. If a process has some unused space OS, tries to share it with other processes.
               Any two processes can have same virtual address but, they poin tot different physical address. These address conversions are done using page tables.
               Os knows the state of the process by looking into 
               <ul>
               <li><span className={styles.mark} >Stack pointer </span></li>
               <li><span className={styles.mark} >Program counter</span></li>

               <li><span className={styles.mark} >CPU regsiter </span></li>
               </ul>
               details related to  a process are stored in <span className={styles.mark} >PCB(Process Control Block)</span>.
               When the CPU switches to another process(Context Switch), it stores the current process contents in its PCB and then loads the 
               PCB of the new process leading to hot cache. After context switch, when P1 is switched again, its content will not be availabe in the cache. This is called cold cache(cache miss).
               P1 and P2 communcate using INter process communication like shared memory and message passing.
                <ul>
               <li><span className={styles.mark} >Parent Process fof linux</span>:    Init (Pid=1)</li>
               <li><span className={styles.mark} >Parent process of android</span>:    Zygote</li>

               
               </ul>
                
              </p>
              </div>


	);
const Threads=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Threads</h3>
              
              <p> 
                Threads are subordinate workers pf a process.A process can have multiple threads. All the the threads of a process share the same location.
                At a time, only one thread can be proccsed by a CPU. So, multi threading requires multi cores in a CPU. A thread context switch can occur of only if 
                t <sub> idle</sub> is less than 2 times  t<sub> context-switch</sub>.context switch of process take more tim than threads switch due to address converion (virtual to physical)

                
              </p>
              </div>


	);
	const Threadsjoin=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Thread Join</h3>
              
              <p> 
                consider two threads T1,T2. T2 starts after T1. When T1.join is used, the main thread waits for T1 to complete. If join is not used, main thread might end and get 
                destroyed irrespective of  T1  completion status. once, Main thread dies, T1 becomes dangling/uncompleted.
                
              </p>
              </div>


	);
	const ThreadTypes=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Thread Types,Relationship and Management</h3>
              
              <p> 
               There are two types of Threads
               <ul>
               <li>User level Threads </li>
               <li>Kernel level Threads(determined by no. of cores)</li>
               </ul>
               The relationship between the user level and kernel level threads are classified as folows
               
                <ul>
               <li>one to one</li>
               <li>one to many</li>
               <li>many to many</li>
              The Thread management libraries are classified into two
              <li>User level thread management libraries present inside a process</li>
              <li> Kernel level libraries - make sures all thread from a single process gets equal amount of CPU share</li>
              </ul>
              </p>

              </div>


	);
	const ThreadPattern=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Thread Design Pattern</h3>
              
              <p> 
               There are two types of Thread Design Pattern
               <ul>
               <li>Boss Worker </li>
               <li>Pipeline Pattern</li>
               <li>Layered</li>
               </ul>
               
              </p>

              </div>


	);
	const Calls=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Sync vs Async</h3>
              
              <p> 
               In a Synchronous call, the main thread alone works serially. In a single threaded Asynchronous call, the main thread delegates a work to a single thread and carries its own work.
               In multi threaded Asynchronous call, main thread delegates work to multipe threads using separate cores.
               
              </p>

              </div>


	);
	const Mutex=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Mutex,Trylock,spinlock and Semaphore</h3>
              
              <p> 
              Mutex is a thread management library. It can lock the threads.once locked ither threads seeking the critical section are block unless the critical section is unlocked.
              But, try lock does nt block the incoming threads. Instead the incoming threads try acquiring the lock again and again. This si also called spin lock.
              <span className={styles.mark} >Binary Semaphore</span> is a type of semaphore where the semaphore variable value has 0 or 1.
              Semaphore has two blocks wait{} and post{}. In wait, each thread waits if the value is 0. If the value is 1, the thread get exxecuted.
              Once, it completes, the post block is executed. In post block, the thread increments the value by 1.
              Now the threads waiting in wait block, sees that the value has become 1 and tries to acquire lock to Crit. sec. . Once, a thread acquires Crti. sec. ,
              it decrements the value to 0 in wait block. Now, since the value is 0, other threads have to wait.
              <span className={styles.mark} >Counting Semaphore</span> It is smae as binary Semaphore. Instead of 2 values, it can have any range of values from 0 depending 
              on the size of wait queue and parallel cores.If the value is 10, then 10 threads in wait block can acquire the lock. Semaphore is usually used with process.
              <span className={styles.mark} >Condition varible</span> Mutex can lock based on a conditon variable by signalling it other threads.


               
              </p>

              </div>


	);
	const Locality=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Locality</h3>
              
              <p> 
              There are two types of Locality
            
              
              <ul>
              <li> <span classname={styles.mark} >Temporal</span>The recently fecthed data is cached. </li>
              <li> <span classname={styles.mark} >Spatial</span>The neighbhors of recently used data are cached</li>
                  
          
              </ul>





            
              </p>

              </div>


	);
const page2=()=>(
	<div id="page2" >
    <div className={styles.divoddtop} >
	
	<Virtualisation />
   <Trap />
  <HyperCalls />
	
	</div>
	<div className={styles.diveventop} >
    <MemVirt />
  <DevVirt />

	</div>
	





</div>


	);
	const Virtualisation=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Virtualisation</h3>
              
              <p> 
              <span classname={styles.mark} >Virtual Machine Monitor (VMM)</span> is the layer that manages Virtual Machine.
              There are two types of Virtualisation 
              <ul>
              <li> <span classname={styles.mark} > Bare-Metal</span> Here the VMM sits directly on the Hardware layer. On top of it , are the guest Vms and service VM(priveleged VM).
              Service VM has some control on Hardware</li>
              <li> <span classname={styles.mark} > Hosted</span> Here the VMM resides inside the Host OS. On top of the Os ar the Guest Vms and other user Applications of Host OS</li>
              </ul>




               
              </p>

              </div>


	);
const Trap=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Trap and emulate</h3>
              
              <p> 
             When a guest OS makes a request to priveleged instruction, a trap is raised and the control gets transfered to hypervisor.
             If the instruction is a legal requesti, then the hypervisor emulates it. If not legal, hypervisor terminates the request.

              </p>

              </div>


	);
	const HyperCalls=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">HyperCalls</h3>
              
              <p> 
             Here, the Guest OS knows that it is a virtualised one and hence makes explicit calls to hypervisor when executing a privelegd instruction.
             This call is called as hypercall

              </p>

              </div>


	);

const MemVirt=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Memory Virtualisation</h3>
              
              <p> 
              There are two types of memory Virtualisation
            
              
              <ul>
              <li> <span classname={styles.mark} >Full Virtualisation</span> Here, there exists two page tables. one at the guest vm and the other at the hypervisor. The vm's pagetable has vm virtual address to virtual address mapping.
              the hyper visor has virtual address to pyhysical address mapping. So, there is two conversions invlived while accessing a memory.
              Service VM has some control on Hardware</li>
              <li> <span classname={styles.mark} >Para Virtualisation</span> Here, there is only one pagetable at the hypervisor.whenever there is a memeory instruction, a hypercall is made to access the mapping in the hypervisor page table.</li>

              </ul>





            
              </p>

              </div>


	);
	const DevVirt=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Device Virtualisation</h3>
              
              <p> 
              There are three types of memory Virtualisation
            
              
              <ul>
              <li> <span classname={styles.mark} >Pass Through Model</span> The hypervisor manages device requests from Guest Vms. But, does not intervene each request.The Guest Vm has the device driver needed to interact with the required device(NIC for example)</li>
              <li> <span classname={styles.mark} >Hypervisor Direct Model</span>VMM intercepts every call to the device and emulates the response. VMM has the device driver for interacting with the requseted device.</li>
                  <li> <span classname={styles.mark} >Split Device Model</span>The driver is split between guest and service VM.The service VM has main backend driver. Whereas, the guest Vm has front end driver.</li>
          
              </ul>





            
              </p>

              </div>


	);
	

	const page3=()=>(
	<div className={styles.comingsoon}>
         <center><p>Coming Soon!</p></center>
         </div>    


	);


Os_comp.propTypes = {};

Os_comp.defaultProps = {};

export default Os_comp;
