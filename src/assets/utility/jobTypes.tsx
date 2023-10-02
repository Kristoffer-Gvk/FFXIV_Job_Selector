let jobType = ""

function allJobs () {
    jobType = "all"
    console.log(jobType)
  }
  function DPS () {
    jobType = "DPS"
  }
  function melee () {
    jobType = "melee"
  }
  function ranged () {
    jobType = "ranged"
  }
  function magic () {
    jobType = "magic"
  }
  function tank () {
    jobType = "tank"
  }
  function healer () {
    jobType = "healer"
  }

  export { jobType, allJobs, DPS, melee, ranged, magic, tank, healer }