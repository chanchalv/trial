/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
  /**
   * Hide all form steps.
   */
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });
  /**
   * Mark all form steps as unfinished.
   */
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove(
      "form-stepper-active",
      "form-stepper-completed"
    );
  });
  /**
   * Show the current form step (as passed to the function).
   */
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  /**
   * Select the form step circle (progress bar).
   */
  const formStepCircle = document.querySelector(
    'li[step="' + stepNumber + '"]'
  );
  /**
   * Mark the current form step as active.
   */
  formStepCircle.classList.remove(
    "form-stepper-unfinished",
    "form-stepper-completed"
  );
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + index + '"]');
    /**
     * Check if the element exist. If yes, then proceed.
     */
    if (formStepCircle) {
      /**
       * Mark the form step as completed.
       */
      formStepCircle.classList.remove(
        "form-stepper-unfinished",
        "form-stepper-active"
      );
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
function perform_action() {
  document
    .querySelectorAll(".btn-navigate-form-step")
    .forEach((formNavigationBtn) => {
      /**
       * Add a click event listener to the button.
       */
      formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(
          formNavigationBtn.getAttribute("step_number")
        );
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
      });
    });
}



var countre = 1;
function add_more_field() {
  countre += 1;
  html =
    `<div class="item" id="item${countre}">\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong> Equipment Details & Ratings </strong>\
        </div>\
        <div class="col-sm-4">\
          <!-- <label class="form-label select-label"></label> -->\
          <select\
            class="form-select"\
            style="font-size: 15px"\
            name="field1"\
          >\
            <option value="1">Alternator-1,1430kVA, KATO Make</option>\
            <option value="2">Alternator-2,1430kVA, KATO Make</option>\
            <option value="3">Alternator-3,1430kVA, KATO Make</option>\
            <option value="4">Alternator-4,1430kVA, KATO Make</option>\
            <option value="5">Emg. DG Set Alternator, 400kVA</option>\
            <option value="6">HPU Motor (Main)-1,750HP</option>\
            <option value="7">HPU Motor (Main)-2,750HP</option>\
            <option value="8">HPU1 supercharger Motor-1,40HP</option>\
            <option value="9">HPU1 supercharger Motor-2,40HP</option>\
            <option value="10">HPU2 supercharger Motor-1,40HP</option>\
            <option value="11">HPU2 supercharger Motor-2,40HP</option>\
            <option value="12">Mud Pump Motor(Main)-1,1600HP</option>\
            <option value="13">Mud Pump Motor(Main)-2,1600HP</option>\
            <option value="14">MP1 Blower Motor,25HP</option>\
            <option value="15">\
              MP1 Liner Cooling Pump Motor,3HP\
            </option>\
            <option value="16">MP1 Lube Oil Pump Motor,4HP</option>\
            <option value="17">MP2 Blower Motor,25HP</option>\
            <option value="18">\
              MP2 Liner Cooling Pump Motor,3HP\
            </option>\
            <option value="19">MP2 Lube Oil Pump Motor,4HP</option>\
            <option value="20">Pipe Handler Clamp Motor,1.2kW</option>\
            <option value="21">\
              Pipe Handler Lower Arm Motor,1.5kW\
            </option>\
            <option value="22">\
              Pipe Handler Rotation Motor,11kW\
            </option>\
            <option value="23">\
              Electrical Air Compressor Motor,100HP\
            </option>\
            <option value="24">BOP Koomy Control Motor,30HP</option>\
            <option value="25">Rig Up HPU Motor</option>\
            <option value="26">Mud Supercharger Motor-1,100HP</option>\
            <option value="27">Mud Supercharger Motor-2,100HP</option>\
            <option value="28">\
              Hopper (Mud Mixer) Motor-1,100HP\
            </option>\
            <option value="29">\
              Hopper (Mud Mixer) Motor-2,100HP\
            </option>\
            <option value="30">Desander (ULMMC) Motor,100HP</option>\
            <option value="31">Desilter (ULMMC) Motor,100HP</option>\
            <option value="32">Trip Tank Motor-1,20HP</option>\
            <option value="33">Trip Tank Motor-2,20HP</option>\
            <option value="34">Still Tank Water Motor-1,30HP</option>\
            <option value="35">Still Tank Water Motor-2,30HP</option>\
            <option value="36">Ground Water Pump Motor-1,30HP</option>\
            <option value="37">Ground Water Pump Motor-2,30HP</option>\
            <option value="38">HP Wasing Unit Motor-1,20HP</option>\
            <option value="39">HP Wasing Unit Motor-2,20HP</option>\
            <option value="40">Shale Shaker Motor-1,2SHP</option>\
            <option value="41">Shale Shaker Motor-2,2SHP</option>\
            <option value="42">Shale Shaker Motor-3,2SHP</option>\
            <option value="43">Mud Cleaner Motor,2SHP</option>\
            <option value="44">Vaccum Degasser Motor,5HP</option>\
            <option value="45">Agitator Motor-1,25HP</option>\
            <option value="46">Agitator Motor-2,25HP</option>\
            <option value="47">Agitator Motor-3,25HP</option>\
            <option value="48">Agitator Motor-4,25HP</option>\
            <option value="49">Agitator Motor-5,25HP</option>\
            <option value="50">Agitator Motor-6,25HP</option>\
            <option value="51">Agitator Motor-7,25HP</option>\
            <option value="52">Agitator Motor-8,25HP</option>\
            <option value="53">Agitator Motor-9,25HP</option>\
            <option value="54">Agitator Motor-10,25HP</option>\
            <option value="55">Agitator Motor-11,25HP</option>\
            <option value="56">Agitator Motor-12,25HP</option>\
            <option value="57">Agitator Motor-13,25HP</option>\
            <option value="58">Agitator Motor-14,25HP</option>\
            <option value="59">Agitator Motor-15,25HP</option>\
            <option value="60">Agitator Motor-16,25HP</option>\
            <option value="61">Fuel Receiving Pump-1(U),3HP</option>\
            <option value="62">Fuel Receiving Pump-2(U),3HP</option>\
            <option value="63">Fuel Transfer Pump-1(L),5HP</option>\
            <option value="64">Fuel Transfer Pump-2(L),5HP</option>\
            <option value="65">Radiator Motor-1,60HP</option>\
            <option value="66">Radiator Motor-2,60HP</option>\
            <option value="67">Radiator Motor-3,60HP</option>\
            <option value="68">Radiator Motor-4,60HP</option>\
            <option value="69">Drilling PCR HVAC</option>\
            <option value="70">MUD PCR HVAC</option>\
            <option value="71">600V System</option>\
            <option value="72">Mobile Welding Set</option>\
            <option value="73">Welding Rectifier/Transformer</option>\
          </select>\
        </div>\
        <div class="col-sm-4">\
          <select class="form-select">\
            <option selected>Select Status</option>\
            <option value="1">Ok</option>\
            <option value="2">Not Ok</option>\
          </select>\
        </div>\
      </div>\
    </div>\
    <br />\
\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong>Running Hours during the Shift</strong>\
        </div>\
        <div class="col-sm-4">\
          <input type="number" class="form-control" name="field${countre}" />\
        </div>\
      </div>\
    </div>\
    <br />\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4"><strong>Break Down Time</strong></div>\
        <div class="col-sm-4">\
          <label>From (Hours)</label>\
          <input type="time" name="field${countre}" />\
        </div>\
        <div class="col-sm-4">\
          <label>To (Hours)</label>\
          <input type="time" name="field${countre}" />\
        </div>\
      </div>\
    </div>\
    <br />\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong>Total Cumulative Running Hours</strong>\
        </div>\
        <div class="col-sm-4">\
          <input type="number" name="field${countre}" />\
        </div>\
      </div>\
    </div>\
    <br />\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong>Remarks/Requirements from Base, if any:</strong>\
        </div>\
        <div class="col-sm-4">\
          <textarea\
            name="text"\
            rows="3"\
            class="form-control"\
            name="field${countre}"\
          >\
          </textarea>\
        </div>\
      </div>\
    </div>\
    <br />\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong\
            >Job Caring Out During the Shift: Defect/Failure reports,\
            if any</strong\
          >\
        </div>\
        <div class="col-sm-4">\
          <textarea\
            name="field${countre}"\
            rows="3"\
            class="form-control"\
            placeholder="Job Caring Out During the Shift: Defect/Failure reports, if\
        any"\
          >\
          </textarea>\
        </div>\
      </div>\
    </div>\
    <br />\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong> Energy/Meter Reading at 06:00 hrs on:</strong>\
        </div>\
        <div class="col-sm-1">DG-1 :</div>\
        <div class="col-sm-1">\
          <input type="number" class="form-control" name="field${countre}" />\
        </div>\
        <div class="col-sm-1">DG-2 :</div>\
        <div class="col-sm-1">\
          <input type="number" class="form-control" name="field${countre}" />\
        </div>\
        <div class="col-sm-1">DG-3 :</div>\
        <div class="col-sm-1">\
          <input type="number" class="form-control" name="field${countre}" />\
        </div>\
        <div class="col-sm-1">DG-4 :</div>\
        <div class="col-sm-1">\
          <input type="number" class="form-control" name="field${countre}" />\
        </div>\
      </div>\
    </div>\
    <br />\
\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-sm-4">\
          <strong>Report on Safety/ Near Miss Accidents:</strong>\
        </div>\
        <div class="col-sm-4">\
          <textarea\
            name="field${countre}"\
            rows="3"\
            class="form-control"\
            placeholder="Job Caring Out During the Shift: Defect/Failure reports, if\
        any"\
          >\
          </textarea>\
        </div>\
      </div>\
    </div>\
  </div>\
  \
<button class="button submit-btn" type="submit">Save</button>\
            <button class="button" onclick="add_more_field()">\
              Add More +\
            </button>\
            <hr/>`;
  var form = document.getElementById("userAccountSetupForm");
  form.innerHTML += html;
}

