var templates = {};
templates["car-comparison-data"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="box-wrapper car-comparison-box-wrapper">'), n.b("\n" + i), n.b("  <!-- Highlights -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.b('    <h3 class="box-header box-header--secondary">Highlights</h3>'), n.b("\n" + i), n.b('    <table class="cc-table">'), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Price</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>321 000 SEK</td>"), n.b("\n" + i), n.b("        <td>241 000 SEK</td>"), n.b("\n" + i), n.b("        <td>251 000 SEK</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Combined Fuel Consumption</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6.9 l/100km</td>"), n.b("\n" + i), n.b("        <td>6.2 l/100km</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">CO2 Emissions</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>144 g/km</td>"), n.b("\n" + i), n.b("        <td>139 g/km</td>"), n.b("\n" + i), n.b("        <td>119 g/km</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Tax Band</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="cc-circle">F</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Acceleration (0-100 km/h)</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6,5 s</td>"), n.b("\n" + i), n.b("        <td>6,3 s</td>"), n.b("\n" + i), n.b("        <td>6 s</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Environmental class</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 6b</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Overall Safety, Euro NCAP</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">City Safety</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Trunk Space</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>480 l</td>"), n.b("\n" + i), n.b("        <td>380 l</td>"), n.b("\n" + i), n.b("        <td>430 l</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Towing Capacity</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>1800 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Highlights -->"), n.b("\n"), n.b("\n" + i), n.b("  <!-- Technical specifications -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.b('    <h3 class="box-header box-header--secondary">Technical Specifications</h3>'), n.b("\n" + i), n.b('    <ul class="accordion standard-accordion cc-accordion">'), n.b("\n" + i), n.b("      <!-- Engine -->"), n.b("\n" + i), n.b('      <li class="expanded">'), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Engine</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Engine Description</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>2.0 Liter, 4-Cylinder, Turbocharged, Direct-Injection</td>"), n.b("\n" + i), n.b("              <td>2.5 Liter, 5-Cylinder, Turbocharged</td>"), n.b("\n" + i), n.b("              <td>3.0 Liter, 6-Cylinder, Turbocharged</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Drivetrain</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Front Wheel Drive</td>"), n.b("\n" + i), n.b("              <td>All Wheel Drive</td>"), n.b("\n" + i), n.b("              <td>All Wheel Drive</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Number of Cylinders</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>4</td>"), n.b("\n" + i), n.b("              <td>5</td>"), n.b("\n" + i), n.b("              <td>6</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Engine Displacement</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>2 Liters</td>"), n.b("\n" + i), n.b("              <td>2.5 Liters</td>"), n.b("\n" + i), n.b("              <td>3 Liters</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>240 hp</td>"), n.b("\n" + i), n.b("              <td>250 hp</td>"), n.b("\n" + i), n.b("              <td>325 hp</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">RPM</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>5600 rpm</td>"), n.b("\n" + i), n.b("              <td>5400 rpm</td>"), n.b("\n" + i), n.b("              <td>5600 rpm</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Torque</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>258 lb-ft</td>"), n.b("\n" + i), n.b("              <td>266 lb-ft</td>"), n.b("\n" + i), n.b("              <td>354 lb-ft</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Engine -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Capacity -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Capacity</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Capacity -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Weight -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Weight</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Weight -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Fuel Economy -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Fuel Economy</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Fuel Economy -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Dimensions -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Dimensions</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Dimensions -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Environment -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Environment</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Environment -->"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Technical specifications -->"), n.b("\n"), n.b("\n" + i), n.b("<!-- Features & Options -->"), n.b("\n" + i), n.b('<div class="box">'), n.b("\n" + i), n.b('  <h3 class="box-header box-header--secondary">Features &amp; Options</h3>'), n.b("\n" + i), n.b("  "), n.b("\n" + i), n.b("</div>"), n.b("\n" + i), n.b("<!-- / Features & Options -->"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["dealer-picker-item"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="dealer-marker">'), n.b("\n" + i), n.b('  <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("  <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="">'), n.b("\n" + i), n.b("  <h6>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('  <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  <p>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 224, 240, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine1", e, t, 0)))
		}), e.pop()), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 274, 292, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(", "), i.b(i.v(i.f("AddressLine2", e, t, 0)))
		}), e.pop()), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 326, 344, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(", "), i.b(i.v(i.f("AddressLine3", e, t, 0)))
		}), e.pop()), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 378, 396, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(", "), i.b(i.v(i.f("AddressLine4", e, t, 0)))
		}), e.pop()), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 430, 448, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(", "), i.b(i.v(i.f("AddressLine5", e, t, 0)))
		}), e.pop()), n.b("\n" + i), n.b("  </p>"), n.b("\n" + i), n.b('  <p class="dealer-map-link"><a onclick="return grabMap(this);" href="'), n.b(n.v(n.f("mapUrl", e, t, 0))), n.b('" target="_blank">See in a map</a></p>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["gallery-overlay-thumbnail"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <img src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('?w=92" srcset="'), n.b(n.v(n.f("src", e, t, 0))), n.b("?w=92 92w, "), n.b(n.v(n.f("src", e, t, 0))), n.b('?w=184 2x" sizes="100vw" alt="'), n.b(n.v(n.f("alt", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b('  <div class="mask"></div>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["gallery-overlay"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="content">'), n.b("\n" + i), n.b('  <div class="detail carousel"></div>'), n.b("\n" + i), n.b('  <div class="thumbnails-scroller">'), n.b("\n" + i), n.b('    <ul class="thumbnails"></ul>'), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="controls">'), n.b("\n" + i), n.b('  <a href="#" class="prev">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-left"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b('  <a href="#" class="next">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-right"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["gallery-tabs-buttons"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("<li>"), n.b(n.v(n.f("activeId", e, t, 0))), n.b('<a data-gallery-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" class="'), n.b(n.v(n.f("classes", e, t, 0))), n.b('" href="#">'), n.b(n.v(n.f("name", e, t, 0))), n.b("</a></li></li>\r"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["overlay-framework"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close">'), n.b("\n" + i), n.b('  <i class="icon icon-close"></i>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-campaign-dealer-accordion-item"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<a class="accordion-panel-toggle" data-dealer-id="'), n.b(n.v(n.f("DealerId", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('    <div class="dealer-marker">'), n.b("\n" + i), n.b('        <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("        <span><b>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</b></span>"), n.b("\n" + i), n.b('        <i class="icon icon-checkmark hidden"></i>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div class="text">'), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 321, 344, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 387, 407, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 450, 470, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 513, 533, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 576, 596, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("Phone", e, t, 1), e, t, 0, 632, 645, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("Phone", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b('        <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</a>"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["dealer-accordion-item"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<a class="accordion-panel-toggle">'), n.b("\n" + i), n.b('  <div class="dealer-marker">'), n.b("\n" + i), n.b('    <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <div class="text">'), n.b("\n" + i), n.b("    <strong>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b('    <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <i class="accordion-arrow icon icon-angle-down"></i>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.b("\n" + i), n.b('<div class="accordion-content">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 0, 382, 428, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
		}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 497, 520, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 557, 577, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 614, 634, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 671, 691, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 728, 748, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
		}), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("Phone", e, t, 1), e, t, 0, 778, 791, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b(i.v(i.f("Phone", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 817, 1118, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("        <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('        <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 934, 1086, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.s(n.f("ServiceName", e, t, 1), e, t, 0, 965, 1057, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b("                <li>"), n.b("\n" + i), n.b("                  "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
				}), e.pop())
			}), e.pop()), n.b("        </ul>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.b('  <ul class="dealer-overlay-links">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1178, 1411, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1265, 1298, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<i class="icon icon-website"></i>')
			}), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span></a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
		}), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1551, 1584, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b('<i class="icon icon-compass"></i>')
		}), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      </a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["dealer-overlay"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("\n" + i), n.b("<header>"), n.b("\n" + i), n.b('  <div class="dealer-marker">'), n.b("\n" + i), n.b('    <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <div class="dealer-name">'), n.b("\n" + i), n.b("    <h5>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</h5>"), n.b("\n" + i), n.b('    <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <a href="#" class="overlay-close">'), n.b("\n" + i), n.b('    <i class="icon icon-close"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</header>"), n.b("\n"), n.b("\n" + i), n.b('<div class="overlay-content">'), n.b("\n" + i), n.b('  <div class="dealer-information">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 0, 419, 465, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
		}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 536, 559, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 598, 621, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 660, 683, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 722, 745, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 784, 807, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b("<p>"), i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("</p>")
		}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("Phone", e, t, 1), e, t, 0, 839, 876, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b('<a href="tel:'), i.b(i.v(i.f("Phone", e, t, 0))), i.b('">'), i.b(i.v(i.f("Phone", e, t, 0))), i.b("</a>")
		}), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 898, 1141, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("    <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('    <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 1001, 1117, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.s(n.f("ServiceName", e, t, 1), e, t, 0, 1026, 1094, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b("          <li>"), n.b("\n" + i), n.b("            "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("          </li>"), n.b("\n" + i)
				}), e.pop())
			}), e.pop()), n.b("    </ul>"), n.b("\n" + i)
		}), e.pop()), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <ul class="dealer-overlay-links">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1210, 1443, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1297, 1330, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<i class="icon icon-website"></i>')
			}), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span></a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
		}), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1583, 1616, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.b('<i class="icon icon-compass"></i>')
		}), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      </a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-comparison-cta"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="cc-ctas">'), n.b("\n" + i), n.b('	<div class="cc-ctas--link car-comparison-print">'), n.b("\n" + i), n.b('		<a href=""><span class="icon icon-print"></span>'), n.b(n.v(n.d("translate.Print", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-comparison-highlights"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("  <!-- Highlights -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 55, 1063, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('    <h3 class="box-header box-header--secondary">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</h3>"), n.b("\n"), n.b("\n" + i), n.b('    <table class="cc-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 166, 1046, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.b('      <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("        <th>"), n.b("\n" + i), n.b('              <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('              <div class="lb-content">'), n.b(n.v(n.f("Description", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('              <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("        </th>"),
				n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      "), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 576, 849, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.s(n.f("SubItems", e, t, 1), e, t, 0, 600, 827, "{{ }}") && (n.rs(e, t, function(e, t, n) {
						n.b("              <tr>"), n.b("\n" + i), n.s(n.d(".", e, t, 1), e, t, 0, 642, 792, "{{ }}") && (n.rs(e, t, function(e, t, n) {
							n.b("                <td>"), n.b("\n"), n.b("\n" + i), n.b('                <h6 class="cc-header--small">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b("                  "), n.b(n.v(n.f("Value", e, t, 0))), n.b("\n"), n.b("\n" + i), n.b("                </td>"), n.b("\n" + i)
						}), e.pop()), n.b("            </tr>"), n.b("\n" + i)
					}), e.pop())
				}), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b("          <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 930, 974, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b("              <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
				}), e.pop()), n.b("          <tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i)
			}), e.pop())
		}), e.pop()), n.b("      <!--"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Combined Fuel Consumption</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6.9 l/100km</td>"), n.b("\n" + i), n.b("        <td>6.2 l/100km</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">CO2 Emissions</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>144 g/km</td>"), n.b("\n" + i), n.b("        <td>139 g/km</td>"), n.b("\n" + i), n.b("        <td>119 g/km</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Tax Band</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="cc-circle">F</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Acceleration (0-100 km/h)</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6,5 s</td>"), n.b("\n" + i), n.b("        <td>6,3 s</td>"), n.b("\n" + i), n.b("        <td>6 s</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Environmental class</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 6b</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Overall Safety, Euro NCAP</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">City Safety</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Trunk Space</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>480 l</td>"), n.b("\n" + i), n.b("        <td>380 l</td>"), n.b("\n" + i), n.b("        <td>430 l</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Towing Capacity</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>1800 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("      </tr>-->"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Highlights -->"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-comparison-selector-group"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="car-selector-overlay-car-group">'), n.b("\n" + i), n.b('	<a href="#" class="car-selector-overlay-drop-down">'), n.b("\n" + i), n.b("		"), n.b(n.v(n.f("GroupName", e, t, 0))), n.b("\n" + i), n.b('		<i class="icon icon-angle-up"></i>'), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i), n.b('	<ul class="car-selector-overlay-cars on">'), n.b("\n" + i), n.b("		"), n.b("\n" + i), n.b("	</ul>"), n.b("\n" + i), n.b("</div>"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-comparison-selector-item"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<li class="car-selector-overlay-item" data-model-id="'), n.b(n.v(n.f("ModelId", e, t, 0))), n.b('">	'), n.b("\n" + i), n.b("<!-- 	"), n.s(n.f("ModelNameCore", e, t, 1), e, t, 0, 92, 600, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("\n" + i), n.s(n.f("ModelNamePrefix", e, t, 1), e, t, 0, 115, 250, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.b('		<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("			<small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i)
			}), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 0, 293, 440, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.b('		<a href="#" class="car-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("			<small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i)
			}), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 1, 0, 0, "") || (n.b('		<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i))
		}), e.pop()), n.s(n.f("ModelNameCore", e, t, 1), e, t, 1, 0, 0, "") || (n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i), n.b("	")), n.b(" -->"), n.b("\n"), n.b("\n" + i), n.s(n.f("NameType1", e, t, 1), e, t, 0, 771, 865, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
		}), e.pop()), n.s(n.f("NameType2", e, t, 1), e, t, 0, 895, 986, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
		}), e.pop()), n.s(n.f("NameType3", e, t, 1), e, t, 0, 1016, 1146, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
		}), e.pop()), n.s(n.f("NameType4", e, t, 1), e, t, 0, 1176, 1318, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<a href="#" class="car-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		<small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.b('	<div class="car-selector-overlay-item-img">'), n.b("\n" + i), n.b('		<img alt="" src="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=197" srcset="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b("?w=197 1x, "), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=394 2x" sizes="" class="car-selector-overlay-item-img--default">'), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.s(n.f("Price", e, t, 1), e, t, 0, 1548, 1588, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<div class="price">'), n.b(n.v(n.f("Price", e, t, 0))), n.b("</div>"), n.b("\n" + i)
		}), e.pop()), n.s(n.f("ShortDescription", e, t, 1), e, t, 0, 1621, 1678, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('	<div class="custom-copy">'), n.b(n.v(n.f("ShortDescription", e, t, 0))), n.b("</div>"), n.b("\n" + i)
		}), e.pop()), n.b("</li>"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-comparison-specs"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("  <!-- Technical specifications -->"), n.b("\n" + i), n.b('  <div class="box" id="technical-specs">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 90, 2122, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('    <h3 class="box-header box-header--secondary">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('    <ul class="accordion standard-accordion cc-accordion">'), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Capacity -->"), n.b("\n" + i), n.s(n.f("cats", e, t, 1), e, t, 0, 257, 2096, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 602, 2008, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b("\n"), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 633, 1412, "{{ }}") && (n.rs(e, t, function(e, t, n) {
						n.b('              <tr class="cc-spec-subheader header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                <th>"), n.b("\n" + i), n.b('                  <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                  <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                </th>"), n.b("\n" + i), n.b('                <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                <th></th>"), n.b("\n" + i), n.b("              </tr>"), n.b("\n"), n.b("\n" + i), n.s(n.f("SubItems", e, t, 1), e, t, 0, 1056, 1386, "{{ }}") && (n.rs(e, t, function(e, t, n) {
							n.b('              <tr class="subitem-labels">'), n.b("\n" + i), n.s(n.f("Labels", e, t, 1), e, t, 0, 1126, 1210, "{{ }}") && (n.rs(e, t, function(e, t, n) {
								n.b('                <td><h6 class="cc-header--small">'), n.b(n.v(n.d(".", e, t, 0))), n.b("</h6></td>"), n.b("\n" + i)
							}), e.pop()), n.b("              </tr>"), n.b("\n" + i), n.b("              <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 1288, 1340, "{{ }}") && (n.rs(e, t, function(e, t, n) {
								n.b("                  <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
							}), e.pop()), n.b("              </tr>"), n.b("\n" + i)
						}), e.pop())
					}), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b('              <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                <th>"), n.b("\n" + i), n.b('                  <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                  <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                </th>"), n.b("\n" + i), n.b('                <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                <th></th>"), n.b("\n" + i), n.b("              </tr>"), n.b("\n" + i), n.b("              <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 1881, 1933, "{{ }}") && (n.rs(e, t, function(e, t, n) {
						n.b("                  <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
					}), e.pop()), n.b("              </tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i)
				}), e.pop()), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Capacity -->"), n.b("\n" + i)
			}), e.pop()), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i)
		}), e.pop()), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Technical specifications -->"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["car-selector-slot"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="car-selector-form js-car-selector-form car-selector-form--pristine">'), n.b("\n" + i), n.b('  <i class="icon icon-close car-selector-remove"></i>'), n.b("\n"), n.b("\n" + i), n.b('  <div class="car-selector-name js-car-selector-name car-selector-info"></div>'), n.b("\n"), n.b("\n" + i), n.b('  <img class="js-car-selector-picture car-selector-picture car-selector-picture--placeholder" alt="" src="" data-placeholder-src="">'), n.b("\n"), n.b("\n" + i), n.b('  <div class="engine-selector-name js-engine-selector-name car-selector-info"></div>'), n.b("\n"), n.b("\n" + i), n.b('  <div class="dropdown-wrapper car-selector-input js-engine-dropdown">'), n.b("\n" + i), n.b('    <i class="dropdown-angle icon icon-angle-down"></i>'), n.b("\n" + i), n.b('    <select class="dropdown-fallback js-engine-fallback-select select" data-defaultLabel="'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('      <option selected="selected" disabled="disabled">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b("    </select>"), n.b("\n"), n.b("\n" + i), n.b('    <a class="dropdown-active-item" href="#">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('    <ul class="dropdown js-engine-select"></ul>'), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <div class="cta-wrapper">'), n.b("\n" + i), n.b('    <div class="car-selector-explore">'), n.b("\n" + i), n.b('      <a href="#">'), n.b(n.v(n.d("translate.Explore", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="text-center car-selector-build">'), n.b("\n" + i), n.b('      <a href="#">'), n.b(n.v(n.d("translate.BuildYourOwn", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div> "), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="car-selector-cta js-car-selector-cta">'), n.b("\n" + i), n.b('  <span class="car-selector-cta-icon">+</span>'), n.b("\n" + i), n.b('  <span class="cta-link">'), n.b(n.v(n.d("translate.Addmodel", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["feature-overlay"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("<header>"), n.b("\n" + i), n.b("    <h5>"), n.b(n.v(n.f("title", e, t, 0))), n.b("</h5>"), n.b("\n" + i), n.b('    <a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n" + i), n.b("</header>"), n.b("\n" + i), n.b('<div class="feature-overlay-content">'), n.b("\n" + i), n.b("    "), n.b(n.t(n.f("htmlContent", e, t, 0))), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["fyv-level-one"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.s(n.f("level", e, t, 1), e, t, 0, 12, 239, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <li class="level-1 level" data-level-id="'), n.b(n.v(n.d("Level1Answer.ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('    <img src="'), n.b(n.v(n.d("Level1Answer.Image", e, t, 0))), n.b('" alt="" class="image" />'), n.b("\n" + i), n.b('    <p class="title">'), n.b(n.v(n.d("Level1Answer.Title", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("    <p>"), n.b(n.v(n.d("Level1Answer.Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("  </li>"), n.b("\n" + i)
		}), e.pop()), n.fl()
	},
	partials: {},
	subs: {}
}), templates["fyv-level-root"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="level level-root" style="'), n.b(n.v(n.d("level.style", e, t, 0))), n.b(';">'), n.b("\n" + i), n.b("  <div>"), n.b("\n" + i), n.b("    <div>"), n.b("\n" + i), n.b('      <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('        <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('        <h3 class="v-center">'), n.b(n.v(n.f("rootLabel", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('        <div class="reload-placeholder"><i class="icon"></i></div>'), n.b("\n" + i), n.b("      </div>"), n.b("\n" + i), n.b("      <h1>"), n.b(n.v(n.f("question", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('      <ul class="buttons"></ul>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["fyv-level-three-results"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b("\n" + i), n.b('<div class="results level-results" data-results-id="'), n.b(n.v(n.d("results.Title", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <div class="background"  data-src="'), n.b(n.v(n.d("prevLevel.BackgroundImage", e, t, 0))), n.b('"></div>'), n.b("\n" + i), n.b('  <div class="fyv-content">'), n.b("\n" + i), n.b('    <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('      <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('      <h3 class="m-center v-center">'), n.b(n.v(n.d("results.Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('      <div class="reload reset v-center"><i class="icon icon-reload"></i></div>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    "), n.b("\n" + i), n.b('    <h1 class="m-center">'), n.b(n.v(n.d("results.SubTitle", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('    <ul class="results-details items-list">'), n.b("\n" + i), n.b('      <li class="results-item wrapper">'), n.b("\n" + i), n.b('        <div class="fluid image show-for-not-lt-ie9" style="background-image:url(\''), n.b(n.v(n.d("results.ModelImage", e, t, 0))), n.b("')\"></div>"), n.b("\n" + i), n.b('        <img class="show-for-lt-ie9" src="'), n.b(n.v(n.d("results.ModelImage", e, t, 0))), n.b('"/>'), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b('      <li class="results-item">'), n.b("\n" + i), n.b("        <p>"), n.b(n.t(n.d("results.Description", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.s(n.f("disclaimer", e, t, 1), e, t, 0, 889, 930, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("        <p>"), n.b(n.v(n.f("disclaimer", e, t, 0))), n.b("</p>"), n.b("\n" + i)
		}), e.pop()), n.b('        <div class="show-for-large-up">'), n.b("\n" + i), n.b('          <ul class="inline v-center-parent ">'), n.b("\n" + i), n.b('            <li class="v-center"><a class="button" href="'), n.b(n.v(n.d("results.BuildURL", e, t, 0))), n.b('">Build Your '), n.b(n.v(n.f("modelName", e, t, 0))), n.b("</a></li>"), n.b("\n" + i), n.b('            <li class="v-center"><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></li>'), n.b("\n" + i), n.b("          </ul>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <ul class="show-for-medium">'), n.b("\n" + i), n.b('          <li><a class="button" href="'), n.b(n.v(n.d("results.BuildURL", e, t, 0))), n.b('">Build Your '), n.b(n.v(n.f("modelName", e, t, 0))), n.b("</a></li>"), n.b("\n" + i), n.b('          <li><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></li>'), n.b("\n" + i), n.b("        </ul>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b('    <ul class="buttons theme-dark">'), n.s(n.d("results.Features", e, t, 1), e, t, 0, 1643, 2014, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b("<li"), n.b("\n" + i), n.b('          class="level2 wrapper"'), n.b("\n" + i), n.b('          data-feature-id="'), n.b(n.v(n.f("ID", e, t, 0))), n.b('"'), n.b("\n" + i), n.b("          style=\"background-image:url('"), n.b(n.v(n.f("Image", e, t, 0))), n.b("')\""), n.b("\n" + i), n.b("          >"), n.b("\n" + i), n.b('          <div class="fluid ">'), n.b("\n" + i), n.b('            <p class="m-center">'), n.b(n.v(n.f("Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b('            <div class="button-wrapper">'), n.b("\n" + i), n.b('              <div class="button m-center">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("          </div>"), n.b("\n" + i), n.b("        </li>")
		}), e.pop()), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b('    <div class="show-for-small">'), n.b("\n" + i), n.b('      <p><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></p>'), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["fyv-level-two"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="level level-2" style="display:none;" data-level-one-id="'), n.b(n.v(n.d("prevLevel.ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <div class="background" data-src="'), n.b(n.v(n.d("prevLevel.BackgroundImage", e, t, 0))), n.b('"></div>'), n.b("\n" + i), n.b("  <div>"), n.b("\n" + i), n.b('    <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('      <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('      <h3 class="v-center">'), n.b(n.v(n.d("prevLevel.Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('      <div class="reload-placeholder"><i class="icon"></i></div>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    <h1>"), n.b(n.v(n.d("prevLevel.FollowUpQuestion", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('    <ul class="buttons">'), n.b("\n" + i), n.s(n.f("level", e, t, 1), e, t, 0, 512, 701, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('        <li data-level-id="'), n.b(n.v(n.f("ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('          <img src="'), n.b(n.v(n.f("Image", e, t, 0))), n.b('" alt="" class="image" />'), n.b("\n" + i), n.b('          <p class="title">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("          <p>"), n.b(n.v(n.f("Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
		}), e.pop()), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["fyv-overlay"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n" + i), n.b('<div class="content">'), n.b("\n" + i), n.b('  <div class="detail carousel">'), n.b("\n" + i), n.b('    <ul class="inline">'), n.b("\n" + i), n.b('      <li class="image"><img src="'), n.b(n.v(n.d("data.DetailImage", e, t, 0))), n.b('"/></li>'), n.b("\n" + i), n.b('      <li class="copy">'), n.b("\n" + i), n.b("        <h2>"), n.b(n.v(n.d("data.Title", e, t, 0))), n.b("</h2>"), n.b("\n" + i), n.b("        <p>"), n.b(n.v(n.d("data.Description", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["story-stream-item"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="story-stream-item" '), n.s(n.f("meta", e, t, 1), e, t, 0, 40, 91, "{{ }}") && (n.rs(e, t, function(e, t, i) {
			i.s(i.f("modelId", e, t, 1), e, t, 0, 52, 79, "{{ }}") && (i.rs(e, t, function(e, t, i) {
				i.b('data-model-id="'), i.b(i.v(i.f("modelId", e, t, 0))), i.b('"')
			}), e.pop())
		}), e.pop()), n.b(">"), n.b("\n"), n.b("\n" + i), n.s(n.f("media", e, t, 1), e, t, 0, 115, 488, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-header '), n.s(n.f("video", e, t, 1), e, t, 0, 150, 159, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("has-video")
			}), e.pop()), n.b('">'), n.b("\n" + i), n.b("    "), n.s(n.f("image", e, t, 1), e, t, 0, 186, 224, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<img class="ss-image" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
			}), e.pop()), n.b("\n" + i), n.s(n.f("video", e, t, 1), e, t, 0, 249, 466, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.s(n.f("youtube", e, t, 1), e, t, 0, 268, 449, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b('        <iframe class="ss-video ss-youtube" type="text/html" frameborder="0" allowfullscreen="" src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('?rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1"></iframe>'), n.b("\n" + i)
				}), e.pop())
			}), e.pop()), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.s(n.f("body", e, t, 1), e, t, 0, 511, 737, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-body">'), n.b("\n" + i), n.b("    "), n.s(n.f("title", e, t, 1), e, t, 0, 550, 568, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("<h4>"), i.b(i.v(i.f("title", e, t, 0))), i.b("</h4>")
			}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("text_truncated", e, t, 1), e, t, 0, 602, 629, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("<p>"), i.b(i.t(i.f("text_truncated", e, t, 0))), i.b("</p>")
			}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("posted", e, t, 1), e, t, 0, 664, 714, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<small class="ss-posted">Posted '), i.b(i.v(i.f("posted", e, t, 0))), i.b("</small>")
			}), e.pop()), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.s(n.f("footer", e, t, 1), e, t, 0, 761, 1205, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-footer">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.f("contentUrl", e, t, 0))), n.b('" target="_blank">'), n.b("\n" + i), n.b("      "), n.s(n.f("avatar", e, t, 1), e, t, 0, 851, 897, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<img class="ss-footer-avatar" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("title", e, t, 1), e, t, 0, 925, 1015, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<h3 class="ss-footer-title '), i.s(i.f("subtitle", e, t, 1), e, t, 0, 965, 977, "{{ }}") && (i.rs(e, t, function(e, t, i) {
					i.b("has-subtitle")
				}), e.pop()), i.b('">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</h3>")
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("subtitle", e, t, 1), e, t, 0, 1045, 1097, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<p class="ss-footer-subtitle">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</p>")
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("icon", e, t, 1), e, t, 0, 1126, 1175, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<i class="ss-footer-icon icon icon-'), i.b(i.v(i.f("icon", e, t, 0))), i.b('"></i>')
			}), e.pop()), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
}), templates["story-stream-overlay"] = new Hogan.Template({
	code: function(e, t, i) {
		var n = this;
		return n.b(i = i || ""), n.b('<div class="story-stream-overlay">'), n.b("\n"), n.b("\n" + i), n.b('  <i class="overlay-close icon icon-close"></i>'), n.b("\n"), n.b("\n" + i), n.s(n.f("media", e, t, 1), e, t, 0, 97, 470, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-header '), n.s(n.f("video", e, t, 1), e, t, 0, 132, 141, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("has-video")
			}), e.pop()), n.b('">'), n.b("\n" + i), n.b("    "), n.s(n.f("image", e, t, 1), e, t, 0, 168, 206, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<img class="ss-image" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
			}), e.pop()), n.b("\n" + i), n.s(n.f("video", e, t, 1), e, t, 0, 231, 448, "{{ }}") && (n.rs(e, t, function(e, t, n) {
				n.s(n.f("youtube", e, t, 1), e, t, 0, 250, 431, "{{ }}") && (n.rs(e, t, function(e, t, n) {
					n.b('        <iframe class="ss-video ss-youtube" type="text/html" frameborder="0" allowfullscreen="" src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('?rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1"></iframe>'), n.b("\n" + i)
				}), e.pop())
			}), e.pop()), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.s(n.f("body", e, t, 1), e, t, 0, 493, 689, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-body">'), n.b("\n" + i), n.b("    "), n.s(n.f("title", e, t, 1), e, t, 0, 532, 550, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("<h4>"), i.b(i.v(i.f("title", e, t, 0))), i.b("</h4>")
			}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("text", e, t, 1), e, t, 0, 574, 591, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b("<p>"), i.b(i.t(i.f("text", e, t, 0))), i.b("</p>")
			}), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("posted", e, t, 1), e, t, 0, 616, 666, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<small class="ss-posted">Posted '), i.b(i.v(i.f("posted", e, t, 0))), i.b("</small>")
			}), e.pop()), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.s(n.f("footer", e, t, 1), e, t, 0, 713, 1157, "{{ }}") && (n.rs(e, t, function(e, t, n) {
			n.b('  <div class="ss-footer">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.f("contentUrl", e, t, 0))), n.b('" target="_blank">'), n.b("\n" + i), n.b("      "), n.s(n.f("avatar", e, t, 1), e, t, 0, 803, 849, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<img class="ss-footer-avatar" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("title", e, t, 1), e, t, 0, 877, 967, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<h3 class="ss-footer-title '), i.s(i.f("subtitle", e, t, 1), e, t, 0, 917, 929, "{{ }}") && (i.rs(e, t, function(e, t, i) {
					i.b("has-subtitle")
				}), e.pop()), i.b('">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</h3>")
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("subtitle", e, t, 1), e, t, 0, 997, 1049, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<p class="ss-footer-subtitle">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</p>")
			}), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("icon", e, t, 1), e, t, 0, 1078, 1127, "{{ }}") && (n.rs(e, t, function(e, t, i) {
				i.b('<i class="ss-footer-icon icon icon-'), i.b(i.v(i.f("icon", e, t, 0))), i.b('"></i>')
			}), e.pop()), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
		}), e.pop()), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
	},
	partials: {},
	subs: {}
});
var vc = vc || {};
$.fx.speeds._default = 200, $.support.transition || ($.fn.transition = $.fn.animate),
function() {
	"use strict";
	vc.mixin = function(e) {
		e && _.each(Array.prototype.slice.call(arguments, 1), function(t) {
			_.each(["initialize", "remove"], function(i) {
				if (i in e && i in t) {
					var n = e[i];
					e[i] = function() {
						t[i].apply(this, arguments), n.apply(this, arguments)
					}
				}
			}), _.defaults(e, t)
		})
	}, vc.inherits = function(e, t) {
		function i() {}
		i.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new i, e.prototype.constructor = e
	}, vc.Stack = function() {
		this.items = []
	}, vc.Stack.prototype = {
		size: function() {
			return this.items.length
		},
		push: function(e) {
			this.items.push(e)
		},
		pop: function() {
			return this.items.pop();

		}
	}, vc.timeDiff = function(e, t) {
		var i = {}, n = e.getTime() - t.getTime();
		return i.days = Math.floor(n / 864e5), n -= 864e5 * i.days, i.hours = Math.floor(n / 36e5), n -= 36e5 * i.hours, i.minutes = Math.floor(n / 6e4), n -= 6e4 * i.minutes, i.seconds = Math.floor(n / 1e3), i
	}, vc.dateDiff = function(e, t, i) {
		i = i || !1;
		var n = 6e4,
			s = 60 * n,
			a = 24 * s,
			o = 30 * a,
			r = 365 * a,
			l = e - t,
			c = i ? "approximately " : "";
		switch (!0) {
			case n > l:
				c += Math.round(l / 1e3) + " seconds ago";
				break;
			case s > l:
				c += Math.round(l / n) + " minutes ago";
				break;
			case a > l:
				c += Math.round(l / s) + " hours ago";
				break;
			case o > l:
				c += Math.round(l / a) + " days ago";
				break;
			case r > l:
				c += Math.round(l / o) + " months ago";
				break;
			default:
				c += Math.round(l / r) + " years ago"
		}
		return c
	}, vc.numberWithLeadingZeroes = function(e, t) {
		for (var i = e + ""; i.length < t;) i = "0" + i;
		return i
	}, vc.getRandomInt = function(e, t) {
		return Math.floor(Math.random() * (t - e)) + e
	}, vc.getRandomString = function(e) {
		for (var t = ""; t.length < e;) t += Math.random().toString(36).substr(2, 1)
	}, String.prototype.alphanumerical = String.prototype.strip || function() {
		return this.replace(/\W/g, "")
	}, String.prototype.stripHTML = String.prototype.stripHTML || function() {
		return $("<div>").html(this).text()
	}, String.prototype.trunc = String.prototype.trunc || function(e, t, i) {
		function n(e) {
			var t, i, n, s = "";
			for (t = 0, i = e.size(); i > t; ++t) n = e.pop(), s += "</" + e.tag + ">";
			return s
		}
		t = t || !1, i = i || "";
		var s, a = this,
			o = /<\/?\w+(\s+\w+="[^"]*")*>/g.exec(a);
		if (o && t) {
			for (var r, l, c, d = "", h = 0, b = !0, p = new vc.Stack; b && (b = /<\/?\w+(\s+\w+="[^"]*")*>/g.exec(a));) {
				if (r = b[0], l = b.index, h + l > e) {
					d += a.substring(0, e - h), d += n(p);
					break
				}
				h += l, d += a.substring(0, l), -1 === r.indexOf("</") ? (c = r.indexOf(" "), c = -1 === c ? r.indexOf(">") : c, p.push({
					tag: r.substring(1, c),
					html: r
				})) : p.pop(), d += r, a = a.substring(l + r.length)
			}
			s = 0 === h || h > e
		} else s = a.length > e, d = a;
		return d = s ? d.substr(0, e - 1) + "&hellip;" : d, d = s && i.length > 0 ? d + " " + i : d
	}
}(),
function() {
	"use strict";
	vc.TranslationBase = Backbone.Model.extend({
		toJSON: function() {
			return _.extend(Backbone.Model.prototype.toJSON.call(this), {
				translate: vc.dictionary
			})
		}
	})
}(),
function() {
	"use strict";
	vc.CarouselItem = Backbone.Model.extend({
		defaults: {
			active: !1
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryItem = vc.CarouselItem.extend({
		defaults: _.extend({}, _.result(vc.CarouselItem.prototype, "defaults"), {
			zoom: 1
		})
	})
}(),
function() {
	"use strict";
	vc.GalleryTab = Backbone.Model.extend({
		defaults: {
			active: !1
		},
		activate: function(e) {
			this.gallery.activate(e)
		},
		activateTab: function(e, t) {
			if (this.active = !0, this.gallery = new vc.GalleryItemCollection, this.gallery.id = this.get("id"), !this.view) {
				var i = new vc.GalleryTabsOverlay({
					collection: this.gallery,
					tabs: this.collection
				});
				i.tabs = this.collection, i.rootUrl = "galleries/" + this.collection.id + "/", this.view = i.render().el
			}
			this.gallery.reset(this.get("images")), vc.app.$mask.append(this.view), this.set({
				active: !0
			}), this.gallery.activate(t)
		},
		removeMask: function() {
			$(this.view).remove(), delete this.view
		}
	})
}(),
function() {
	"use strict";
	vc.ChartItem = Backbone.Model.extend({
		getBarChartData: function() {
			return this
		},
		getDoughnutChartData: function() {
			return this.attributes
		}
	})
}(),
function() {
	"use strict";
	vc.Dealer = vc.TranslationBase.extend({
		idAttribute: "DealerId",
		defaults: {
			active: !1,
			number: 1
		},
		initialize: function() {
			_.bindAll(this, "activate")
		},
		activate: function() {
			this.collection.activate(this)
		},
		getFormattedDistance: function() {
			var e = this.get("distance");
			return "us" === vc.settings.marketId && e ? Math.round(62137e-8 * e) + " mi" : e >= 1e3 ? Math.round(e / 1e3) + " km" : 1e3 >= e ? Math.round(e) + " m" : void 0
		},
		toJSON: function() {
			var e = vc.TranslationBase.prototype.toJSON.call(this);
			e.humanReadableDistance = this.getFormattedDistance();
			var t = vc.settings.dealerLocatorUrl + "#map",
				i = this.get("GeoCode");
			if (i) {
				var n = 12;
				t += "/at/" + i.Latitude + "," + i.Longitude + "/zoom/" + n, e.mapUrl = t
			}
			return e
		}
	})
}(),
function() {
	"use strict";
	vc.DealerData = Backbone.Model.extend({
		url: "/data/dealers/",
		fetched: !1,
		searchingByDealerName: !1,
		json: null,
		minDealers: 3,
		initialize: function() {
			this.listenTo(vc.app, "dealer-name-search", this.isSearchingByDealerName)
		},
		isSearchingByDealerName: function(e) {
			this.searchingByDealerName = e
		},
		latLng: function(e) {
			var t;
			return t = "undefined" != typeof BMap ? new BMap.Point(e.lng, e.lat) : new google.maps.LatLng(e.lat, e.lng)
		},
		latLngBounds: function(e, t) {
			var i;
			return "undefined" != typeof BMap ? (i = new BMap.Bounds(e, t), i.contains = function(e) {
				return i.containsPoint(e)
			}) : i = new google.maps.LatLngBounds(e, t), i
		},
		computeDistanceBetween: function(e, t, i) {
			var n;
			return n = "undefined" != typeof BMap ? vc.DealerLocator.BaiduMap.getMap().getDistance(e, t) : google.maps.geometry.spherical.computeDistanceBetween(e, t, i)
		},
		search: function() {
			var e = $.Deferred(),
				t = this,
				i = Array.prototype.slice.apply(arguments),
				n = i.splice(0, 1)[0];
			if (this.fetched) e.resolve(this[n].apply(this, i));
			else {
				if (this.deferred) {
					var s = $.Deferred();
					return this.deferred.then(function() {
						s.resolve(t[n].apply(t, i))
					}), s
				}
				this.fetch({
					sort: !1,
					add: !0,
					remove: !0,
					merge: !1,
					cache: !0,
					data: {
						expand: "Services,Urls",
						format: "json",
						filter: "MarketId eq '" + (vc.settings.marketId || "sv") + "' and LanguageId eq '" + (vc.settings.languageId || "sv") + "'"
					},
					success: function(t) {
						t.fetched = !0, t.set("value", _.clone(t.attributes)), e.resolve(t[n].apply(t, i))
					}
				}), this.deferred = e
			}
			return e.promise()
		},
		findDealersInBox: function(e) {
			return this.searchingByDealerName ? $.Deferred().reject() : this.search("_findDealersInBox", e)
		},
		_findDealersInBox: function(e) {
			var t, i = e.data,
				n = [],
				s = this.get("value"),
				a = this.latLng({
					lat: i.bottomRightlatitude,
					lng: i.topLeftlongitude
				}),
				o = this.latLng({
					lat: i.topLeftlatitude,
					lng: i.bottomRightlongitude
				}),
				r = this.latLngBounds(a, o);
			for (var l in s) s[l].GeoCode && (t = this.latLng({
				lat: s[l].GeoCode.Latitude,
				lng: s[l].GeoCode.Longitude
			}), r.contains(t) && n.push(s[l]));
			return n
		},
		findDealersByRadius: function(e) {
			return this.searchingByDealerName ? $.Deferred().reject() : this.search("_findDealersByRadius", e)
		},
		_findDealersByRadius: function(e) {
			var t, i = e.data,
				n = [],
				s = this.get("value"),
				a = this.latLng({
					lat: i.latitude,
					lng: i.longitude
				}),
				o = i.radius;
			for (var r in s) s[r].GeoCode && (t = this.latLng({
				lat: s[r].GeoCode.Latitude,
				lng: s[r].GeoCode.Longitude
			}), this.computeDistanceBetween(a, t) <= o && n.push(s[r]));
			return n
		},
		getDealerNames: function(e) {
			return this.search("_getDealerNames", e)
		},
		_getDealerNames: function() {
			var e, t = [],
				i = this.get("value");
			for (var n in i) i[n].Name && (e = i[n].Name.trim(), t[t.length - 1] !== e && t.push(e));
			return t
		},
		findDealersByName: function(e) {
			this.isSearchingByDealerName(!0);
			var t, i = [],
				n = this.get("value");
			e = e.trim().toLowerCase();
			for (var s in n) n[s].Name && (t = n[s].Name.trim().toLowerCase(), -1 !== t.indexOf(e) && i.push(n[s]));
			return i
		},
		findDealerById: function(e, t) {
			return this.search("_findDealerById", e, t)
		},
		_findDealerById: function(e, t) {
			var i = this.get("value");
			t = t || "DealerId";
			for (var n in i) if (i[n][t] && i[n][t] === e) return i[n];
			return !1
		},
		getMinBounds: function(e) {
			var t = this;
			if (this.fetched) return $.Deferred().resolve(t._getMinBounds(e));
			var i = $.Deferred();
			return this.deferred.then(function() {
				i.resolve(t._getMinBounds(e))
			}), i
		},
		_getMinBounds: function(e) {
			var t, i = this.get("value"),
				n = this.minDealers,
				s = this.latLngBounds(e.location, e.location),
				a = s.getCenter(),
				o = [];
			for (var r in i) if (i[r].GeoCode) if (t = this.latLng({
				lat: i[r].GeoCode.Latitude,
				lng: i[r].GeoCode.Longitude
			}), o.length < n) o.push(t), o = o.sort();
			else for (var l = 0, c = o.length; c > l; ++l) if (this.computeDistanceBetween(a, t) < this.computeDistanceBetween(a, o[l])) {
				o.splice(l, 0, t), o.pop();
				break
			}
			for (var d = 0, h = o.length; h > d; ++d) s.extend(o[d]);
			return s
		}
	})
}(),
function() {
	"use strict";
	vc.DealerPickerModel = vc.Dealer.extend({
		toJSON: function() {
			var e = vc.Dealer.prototype.toJSON.call(this);
			return e
		}
	})
}(),
function() {
	"use strict";
	vc.ManualsItem = Backbone.Model.extend({
		getYears: function() {
			return _.clone(this.attributes)
		},
		getModels: function() {
			return _.clone(this.attributes)
		},
		getManuals: function() {
			return _.clone(this.attributes)
		}
	})
}(),
function() {
	"use strict";
	vc.CarModel = Backbone.Model.extend({
		urlRoot: "/data/car-comparison/GetCategorizedCars",
		toJSON: function() {
			return _.extend(Backbone.Model.prototype.toJSON.call(this), {
				translate: vc.dictionary.CarComparison
			})
		}
	})
}(),
function() {
	"use strict";
	vc.CarVariant = Backbone.Model.extend({
		urlRoot: "/data/car-comparison/GetCarDetails"
	})
}(),
function() {
	"use strict";
	vc.CarOverlayModel = Backbone.Model.extend({
		urlRoot: "/data/car-comparison/GetHelpText"
	})
}(),
function() {
	"use strict";
	vc.InterActiveVideoModel = Backbone.Model.extend({
		urlRoot: "/Static/data/interactive-video.json"
	})
}(),
function() {
	"use strict";
	vc.StoryStreamItem = Backbone.Model.extend({
		parse: function(e) {
			if ("undefined" != typeof e.content_items && e.content_items && e.content_items.length > 0) {
				var t = e.content_items[0],
					i = 140;
				e.parsed = {
					meta: {},
					media: {},
					body: {},
					footer: {
						title: {},
						subtitle: {}
					}
				}, "undefined" != typeof t.source_content_item_id && t.source_content_item_id && t.source_content_item_id.length > 0 ? (e.id = t.source_content_item_id.toString().toLowerCase().alphanumerical(), e.parsed.meta.modelId = e.id) : (e.id = vc.getRandomString(), e.parsed.meta.modelId = e.id), e.parsed.meta.feedType = "undefined" != typeof t.feed_type && t.feed_type && t.feed_type.length > 0 ? t.feed_type.toString().toLowerCase() : "", e.parsed.meta.contentUrl = "undefined" != typeof t.url && t.url && t.url.length > 0 ? t.url : "", e.parsed.meta.permalink = "undefined" != typeof t.permalink && t.permalink && t.permalink.length > 0 ? t.permalink : "";
				var n = e.parsed.meta.feedType;
				"undefined" != typeof t.images && t.images && t.images.length > 0 && (e.parsed.media.image = {
					src: "undefined" != typeof t.images[0].original && t.images[0].original && t.images[0].original.length > 0 ? t.images[0].original : "",
					sizes: "undefined" != typeof t.images[0].sizes && t.images[0].sizes && t.images[0].sizes.length > 0 ? t.images[0].sizes : ""
				}), "undefined" != typeof t.videos && t.videos && t.videos.length > 0 && (e.parsed.media.video = {
					name: "undefined" != typeof t.videos[0].name && t.videos[0].name && t.videos[0].name.length > 0 ? t.videos[0].name : "",
					url: "undefined" != typeof t.videos[0].url && t.videos[0].url && t.videos[0].url.length > 0 ? t.videos[0].url : ""
				}, e.parsed.media.video[n] = !0), e.parsed.body.title = "undefined" != typeof t.title && t.title && t.title.length > 0 ? t.title : "", "undefined" != typeof t.body && t.body && t.body.length > 0 ? (e.parsed.body.text = t.body, e.parsed.body.text_truncated = e.parsed.body.text.trunc(i, !0, '<a href="#" class="ss-overlay-show">Read more</a>')) : (e.parsed.body.text = "", e.parsed.body.text_truncated = ""), e.parsed.body.posted = "undefined" != typeof t.publish_date && t.publish_date && t.publish_date.length > 0 ? vc.dateDiff(new Date, new Date(t.publish_date)) : "", "undefined" != typeof t.avatar_url && t.avatar_url && t.avatar_url.length > 0 && (e.parsed.footer.avatar = {
					src: t.avatar_url
				}), e.parsed.footer.contentUrl = e.parsed.meta.contentUrl, e.parsed.footer.title.text = "undefined" != typeof t.author && t.author && t.author.length > 0 ? t.author : "", e.parsed.footer.subtitle.text = "undefined" != typeof t.source && t.source && t.source.length > 0 ? t.source : "", e.parsed.footer.icon = n ? n : "";
				var s = ["instagram"],
					a = ["twitter", "facebook"],
					o = ["twitter", "instagram"],
					r = ["youtube", "instagram"],
					l = ["youtube"];
				e.parsed.footer.title.prefix = s.indexOf(n) > -1 ? "@" : "", e.parsed.footer.subtitle.prefix = a.indexOf(n) > -1 ? "@" : "", e.parsed.body.title = o.indexOf(n) > -1 ? "" : e.parsed.body.title, e.parsed.footer.subtitle = r.indexOf(n) > -1 ? "" : e.parsed.footer.subtitle, e.parsed.media.image = l.indexOf(n) > -1 ? "" : e.parsed.media.image
			}
			return e
		}
	})
}(),
function() {
	"use strict";
	vc.CarouselItemCollection = Backbone.Collection.extend({
		model: vc.CarouselItem,
		activate: function(e) {
			var t, i = e ? this.findWhere({
				id: e
			}) : this.first(),
				n = this.indexOf(i),
				s = "left";
			this.forEach(function(e, i) {
				t = e.get("active"), e.set({
					next: !1,
					prev: !1
				}), n !== i || t ? t && i !== n && (e.set({
					active: !1,
					direction: s
				}), s = "right") : (e.set({
					active: !0,
					direction: s
				}), s = "right")
			})
		},
		activeItem: function() {
			return this.findWhere({
				active: !0
			})
		},
		prevItem: function() {
			var e = this.indexOf(this.activeItem());
			return this.at(e - 1) || this.last()
		},
		nextItem: function() {
			var e = this.indexOf(this.activeItem());
			return this.at(e + 1) || this.first()
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryItemCollection = vc.CarouselItemCollection.extend({
		model: vc.GalleryItem
	})
}(),
function() {
	"use strict";
	vc.GalleryTabCollection = Backbone.Collection.extend({
		model: vc.GalleryTab,
		parse: function(e) {
			return e.galleries
		},
		activate: function(e, t, i) {
			var n = this.findWhere({
				active: !0
			});
			n.id !== t && this.activateTab(this.id, t, i), n.activate(i)
		},
		activateTab: function(e, t, i) {
			var n = this.findWhere({
				active: !0
			}),
				s = t ? this.findWhere({
					id: t
				}) : this.first();
			return n && (n.set({
				active: !1
			}), n.removeMask()), s.activateTab(t, i), s
		}
	})
}(),
function() {
	"use strict";
	vc.DealerCollection = Backbone.Collection.extend({
		model: null,
		url: "",
		searchedName: "",
		initialize: function() {
			this.listenTo(this, "sort", this.sorted)
		},
		sorted: function() {
			this.each(function(e, t) {
				e.set("number", t + 1)
			}), this.trigger("numbered")
		},
		activate: function(e) {
			this.each(function(t) {
				t.set("active", t === e)
			})
		},
		comparator: function(e) {
			return e.marker && this.visitorPosition ? (e.set("distance", google.maps.geometry.spherical.computeDistanceBetween(this.visitorPosition, e.marker.getPosition())), e.get("distance")) : null
		},
		findDealersByName: function(e) {
			this.set(vc.dealerData.findDealersByName(e)), this.trigger("dealer-name-selected"), this.trigger("sync", this)
		},
		parse: function(e) {
			return e.value
		}
	})
}(),
function() {
	"use strict";
	vc.DealerPickerCollection = vc.DealerCollection.extend({
		model: vc.DealerPickerModel,
		url: "https://vdf.authoring.volvocars.com/OData/VDF.svc/FindDealersByRadius",
		fetch: function(e) {
			var t = this,
				i = 40233.5,
				n = {
					BOX: "_findDealersInBox",
					RADIUS: "_findDealersByRadius"
				};
			vc.dealerData.getMinBounds(e.data.geometry).done(function(s) {
				e.data.bottomRightlatitude = s.getSouthWest().lat(), e.data.bottomRightlongitude = s.getNorthEast().lng(), e.data.topLeftlatitude = s.getNorthEast().lat(), e.data.topLeftlongitude = s.getSouthWest().lng();
				var a = new google.maps.LatLng(e.data.latitude, e.data.longitude),
					o = s.getNorthEast(),
					r = s.getSouthWest(),
					l = new google.maps.LatLng(o.lat(), r.lng()),
					c = new google.maps.LatLng(r.lat(), o.lng()),
					d = google.maps.geometry.spherical.computeDistanceBetween(a, r),
					h = google.maps.geometry.spherical.computeDistanceBetween(a, o),
					b = google.maps.geometry.spherical.computeDistanceBetween(a, l),
					p = google.maps.geometry.spherical.computeDistanceBetween(a, c),
					u = Math.max(d, h, b, p, i);
				e.data.radius = u, t.set(vc.dealerData[n.RADIUS](e), e), t.trigger("sync", t)
			}).fail(function() {
				t.trigger("error")
			})
		},
		findDealerById: function(e, t) {
			var i = this;
			vc.dealerData.findDealerById(e, t).done(function(e) {
				i.set(e), i.trigger("sync", i)
			})
		}
	})
}(),
function() {
	"use strict";
	vc.StoryStreamItemCollection = Backbone.Collection.extend({
		url: "/data/story-stream/",
		model: vc.StoryStreamItem,
		fetch: function(e) {
			return e || (e = {}), e.storyName && e.storyName.length > 0 && (this.url = this.url + e.storyName), Backbone.Collection.prototype.fetch.call(this, e)
		},
		parse: function(e) {
			return this.date = e.date, this.meta = e.meta, this.total_pages = e.total_pages, e.blocks ? e.blocks : e
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryRouter = Backbone.Router.extend({
		initialize: function() {
			this.route("", "nonGalleryRoute"), this.route(/galleries\/([^\/]+)\/?([^\/]+)?\/?([^\/]+)?/i, "galleriesRoute"), this.route(/gallery\/([^\/]+)\/?([^\/]+)?/i, "galleryRoute")
		},
		nonGalleryRoute: function() {
			this.currentGallery && (this.currentGallery = null, vc.app.trigger("mask:hide")), this.currentGalleries && (this.currentGalleries = null, vc.app.trigger("mask:hide"))
		},
		galleryRoute: function(e, t) {
			var i = this,
				n = "/media-gallery/" + e;
			if ("frontend" === e && (n = "/static/data/gallery.json"), this.currentGallery) this.currentGallery.url !== n, this.currentGallery.activate(t);
			else {
				this.currentGallery = new vc.GalleryItemCollection, this.currentGallery.url = n, this.currentGallery.id = e;
				var s = new vc.GalleryOverlay({
					collection: this.currentGallery
				});
				vc.app.$mask.append(s.render().el), this.currentGallery.fetch({
					reset: !0
				}).then(function() {
					i.currentGallery.activate(t)
				})
			}
		},
		galleriesRoute: function(e, t, i) {
			var n = this,
				s = "/" + vc.settings.marketId + "/media-gallery/tabbed/" + e;
			("1" === e || "2" === e) && (s = "/static/data/galleries.json"), this.currentGalleries ? (this.currentGalleries.url !== s, this.currentGalleries.activate(e, t, i)) : (this.currentGalleries = new vc.GalleryTabCollection, this.currentGalleries.url = s, this.currentGalleries.id = e, this.currentGalleries.fetch({
				reset: !0
			}).then(function() {
				n.currentGalleries.activateTab(e, t, i)
			}))
		},
		launchGalleryOverlay: function() {}
	})
}(),
function() {
	"use strict";
	vc.StoryCarouselRouter = Backbone.Router.extend({
		initialize: function(e) {
			this.collection = e.collection;
			var t = new RegExp(this.collection.id + "(\\/([^\\/]+))?");
			this.route(t, "carouselRoute")
		},
		carouselRoute: function(e, t) {
			this.collection.activate(t)
		}
	})
}(),
function() {
	"use strict";
	vc.ElementFillContainer = {
		initialize: function() {
			_.bindAll(this, "updateFiller", "calculateFillerSize"), this.elementFillContainer = {
				fillers: []
			}
		},
		updateFillers: function() {
			_.each(this.elementFillContainer.fillers, this.updateFiller)
		},
		updateFiller: function(e) {
			var t = {};
			t = this.calculateFillerSize(e, t), t = this.calculateFillerPosition(e, t), e.el.css(t)
		},
		calculateFillerSize: function(e, t) {
			e.container.is(":visible") || (e.container = this.getContainer(e.container));
			var i = e.container.width(),
				n = e.container.height(),
				s = i / n;
			return e.aspectRatio > s && "contain" !== e.method || e.aspectRatio < s && "contain" === e.method ? (t.height = n, t.width = Math.ceil(n * e.aspectRatio)) : (t.height = Math.ceil(i / e.aspectRatio), t.width = i), t
		},
		calculateFillerPosition: function(e, t) {
			var i = e.container.width() || 0,
				n = e.container.height() || 0;
			return t.left = Math.floor(-(t.width - i) * e.alignment[0]), t.top = Math.floor(-(t.height - n) * e.alignment[1]), t
		},
		startFillingContainer: function(e) {
			if (e = e || {}, _.defaults(e, {
				container: this.$el,
				method: "crop",
				aspectRatio: 16 / 9,
				alignment: [.5, .5]
			}), !e.el) throw new Error('No "el" was provided to "startFillingContainer"');
			e.el = e.el instanceof $ ? e.el : $(e.el), this.elementFillContainer.fillers.length || this.listenTo(vc.app, "resize", this.updateFillers), this.elementFillContainer.fillers.push(e), this.updateFiller(e)
		},
		stopFillingContainer: function(e) {
			if (e) {
				e instanceof $ && (e = e[0]);
				for (var t = 0; t < this.elementFillContainer.fillers.length; t++) e === this.elementFillContainer.fillers[t].el[0] && (this.elementFillContainer.fillers.splice(t, 1), t--)
			} else this.elementFillContainer.fillers = [];
			this.elementFillContainer.fillers.length || this.stopListening(vc.app, "resize", this.updateFillers)
		},
		getContainer: function(e) {
			for (var t = e.parents(), i = t.length, n = 0; i > n; n++) if ($(t[n]).is(":visible")) return $(t[n])
		}
	}
}(),
function() {
	"use strict";
	vc.ResponsiveVideo = {
		videoFormats: ["webm", "mp4"],
		initialize: function() {
			_.bindAll(this, "createVideo", "videoStartedPlaying"), this.listenTo(vc.app, "device:changed", this.deviceChanged)
		},
		deviceChanged: function() {
			this.hasVideo() && this.createVideo()
		},
		createVideo: function() {
			var e = this.getVideoVersion();
			if (!e || 0 === e.length) return void(this.$bgVideo && this.stopVideo());
			var t = document.createElement("video");
			t.preload = "auto", t.autoplay = "autoplay", t.loop = "loop", t.muted = "muted", _.each(e, function(e) {
				var i = e.slice(e.lastIndexOf(".") + 1, e.length),
					n = document.createElement("source");
				n.src = e, n.type = "video/" + i, t.appendChild(n)
			});
			var i = document.createElement("object"),
				n = {
					data: "/Static/mediaelement/flashmediaelement.swf",
					width: "100%",
					height: "100%",
					bgcolor: "",
					id: "flash-fallback"
				};
			_.extend(i, n), i.type = "application/x-shockwave-flash";
			var s = [{
				name: "movie",
				value: "/Static/mediaelement/flashmediaelement.swf"
			}, {
				name: "flashvars",
				value: "autoplay=" + (t.autoplay ? !0 : !1) + "&controls=" + (t.controls ? !0 : !1) + "&startvolume=" + (t.muted ? 0 : 100) + "&file=" + e[0]
			}, {
				name: "allowfullscreen",
				value: "false"
			}, {
				name: "allowscriptaccess",
				value: "always"
			}, {
				name: "seamlesstabbing",
				value: "true"
			}, {
				name: "wmode",
				value: "opaque"
			}];
			if (_.each(s, function(e) {
				var t = document.createElement("param");
				_.extend(t, e), i.appendChild(t)
			}), t.appendChild(i), this.disableAutoplay && (t.removeAttribute("autoplay"), t.controls = "controls", t.poster = this.poster, this.$el.find("video").each(function() {
				$(this).remove()
			}), this.$el.append(t), !this.hasVideo())) {
				var a = $(this.$el.children("video")[0]);
				a.css({
					height: "389px"
				}), a.mediaelementplayer({
					videoHeight: 389,
					enableAutosize: !0,
					pluginHeight: 389
				}), $(a.children(".me-plugin object")[0]).css({
					height: "389px"
				})
			}
			$(t).one("playing", this.videoStartedPlaying)
		},
		stopVideo: function() {
			this.$bgVideo.remove(), this.$bgVideo = null
		},
		videoStartedPlaying: function(e) {
			var t = $(e.currentTarget);
			t.length && (this.$bgVideo && (t[0].currentTime = this.$bgVideo[0].currentTime, this.stopVideo()), this.$bgVideo = t, this.$el.append(this.$bgVideo), this.$bgVideo[0].play())
		},
		parseVideoVariants: function(e) {
			if (!e) return null;
			var t = {};
			return _.each(e.split(";"), function(e) {
				var i = e.split(":"),
					n = i[0],
					s = i[1].split(",");
				t[n] = s
			}), t
		},
		hasVideo: function(e) {
			return e = e || this.$el, Modernizr.video && !! e.data("video")
		},
		getVideoVersion: function(e) {
			e = e || this.$el, this.videoVariants || (this.videoVariants = this.parseVideoVariants(e.data("video")));
			var t = this.videoVariants[vc.app.currentDevice.name];
			if (t) return t;
			for (var i = 0; i < vc.app.devices.length; i++) {
				var n = vc.app.devices[i];
				if (n.minWidth < vc.app.currentDevice.minWidth && (t = this.videoVariants[n.name])) break
			}
			return t
		}
	}
}(),
function() {
	"use strict";
	vc.ScrollSpy = {
		scrollSpyDevices: {
			small: !0,
			medium: !0,
			large: !0,
			"extra-large": !0
		},
		initialize: function() {
			_.bindAll(this, "spyScrolled", "isViewScrolled"), this.spyListeners = [], this._spyHalfVisible = [], this._spyVisible = [], this.addSpyListeners(this.$el), this.listenTo(vc.app, "app:scrolled", this.isViewScrolled)
		},
		addSpyListeners: function(e) {
			this.spyListeners.push(e)
		},
		isViewScrolled: function(e) {
			e = e || vc.app.$window.scrollTop();
			for (var t = this.spyListeners.length; t--;) this.spyScrolled(e, this.spyListeners[t])
		},
		spyVisible: function(e) {
			return !e && this.spyListeners && (e = this.spyListeners[0]), -1 !== _.indexOf(this._spyVisible, e[0])
		},
		spyHalfVisible: function(e) {
			return !e && this.spyListeners && (e = this.spyListeners[0]), -1 !== _.indexOf(this._spyHalfVisible, e[0])
		},
		spyScrolled: function(e, t) {
			var i = t.offset(),
				n = e + vc.app.$window.height(),
				s = i.top,
				a = t.height(),
				o = s + a / 2,
				r = s + a,
				l = t[0],
				c = this.spyVisible(t),
				d = this.spyHalfVisible(t),
				h = this.spyScrollOffset || 0;
			!c && n > s + h && r > e ? (t.trigger("scroll-spy:enter-viewport"), this._spyVisible.push(l)) : c && !d && n > o && r > e ? (t.trigger("scroll-spy:half-mark"), this._spyHalfVisible.push(l)) : c && (s > n || e > r) && (t.trigger("scroll-spy:leave-viewport"), this._spyVisible = _.without(this._spyVisible, l), this._spyHalfVisible = _.without(this._spyVisible, l))
		}
	}
}(),
function() {
	"use strict";
	vc.PreloadImages = {
		downloadImage: function(e) {
			var t = Q.defer(),
				i = document.createElement("img");
			return i.onload = function() {
				t.resolve(i)
			}, i.onerror = function() {
				t.reject(new Error(e + " could not be downloaded"))
			}, i.src = e, t.promise
		},
		downloadImages: function(e) {
			var t = this,
				i = [];
			return _.each(e, function(e) {
				i.push(t.downloadImage(e))
			}), Q.all(i)
		}
	}
}(),
function() {
	"use strict";
	vc.HammerView = {
		killHammerEvents: function(e) {
			e.preventDefault(), e.stopPropagation(), e.gesture && (e.gesture.stopPropagation(), e.gesture.preventDefault())
		}
	}
}(),
function() {
	"use strict";
	vc.DealerAutocomplete = {
		enableAutocomplete: function(e, t) {
			var i = this;
			vc.dealerData.getDealerNames().done(function(n) {
				e.autocomplete({
					lookup: n,
					zIndex: 999,
					onSelect: function(e) {
						e.value !== i.collection.searchedName && (i.collection.findDealersByName(e.value), i.collection.searchedName = e.value)
					},
					onInvalidateSelection: function() {
						i.collection.searchedName = "", vc.app.trigger("dealer-name-search", !1)
					},
					beforeRender: function(e) {
						if ("function" == typeof t) for (var i = t(), n = e.children(), s = null, a = null, o = null, r = i.length - 1; r >= 0; r--) {
							for (a = !1, s = -1; !a && s < n.length - 1;) s++, a = n[s].innerText === i[r];
							a && (o = n.eq(s).clone(), e.remove('[data-index="' + s + '"]').prepend(o))
						}
					}
				})
			})
		}
	}
}(),
function() {
	"use strict";
	vc.Nav = Backbone.View.extend({
		initialize: function() {
			if (this.$html = vc.app.$html, this.isTransparent = this.$html.hasClass("is-nav-transparent"), this.navDrop = this.$html.find("#nav-drop"), this.navDropContainer = this.navDrop.find(".nav-drop-container"), this.markActiveItem(), this.drops = {}, this.currentDrop = null, this.listenTo(vc.app, "navdrop:close", this.hideDrop), this.listenTo(vc.app, "app:scrolled", this.changeBackground), this.state = "closed", !this.$el.hasClass("nav-drop")) {
				this.navPrimary = this.$el.find(".nav-list-prim"), this.navLogo = this.$el.find(".nav-logo img");
				var e = this;
				this.navPrimary.ready(function() {
					
					setTimeout(function() {

						e.startPrimaryWidth = e.navPrimary.width(),
						 e.startLogoPosition = (e.navLogo.position()?e.navLogo.position().left:0),
						  e.fontFlow(!0)
					}, 50)
					
				}), $(window).on("resize", function() {
					e.fontFlow(!1)
				})
			}
		},
		timeout: null,
		events: {
			//cambios mios desactive el over del menu
			//'mouseenter .js-drop:not(".is-icon")': "openDrop",
			//'mouseleave .js-drop:not(".is-icon")': "delayClose",
			"click .js-drop": "toggleDrop",
			"click .js-slide": "toggleDrop"
		},
		markActiveItem: function() {
			$(".nav-list-item[data-active-item=true]").addClass("on")
		},
		changeBackground: function() {
			if (this.isTransparent) {
				var e = vc.app.$window.scrollTop(),
					t = 0 >= e ? "addClass" : "removeClass";
				this.$html[t]("is-nav-transparent")
			}
		},
		toggleDrop: function(e) {
			if (e.preventDefault(), "opening" !== this.state) {
				var t = $(e.currentTarget),
					i = t.data("nav-drop-id"),
					n = this.getDrop(i);
					//cambios mios
					$('.boton_contacto_menu').removeClass('on');
					//cambios mios
					
				if (n === this.currentDrop && !t.hasClass("js-slide")) return this.$html.hasClass("no-csstransitions") && (this.blockHoverOpen = !0), this.hideDrop();
				this.hideDrop(), this.showDrop(n, i, t)
			}
		},
		getDrop: function(e) {
			return e in this.drops || (this.drops[e] = new vc.NavDropItem({
				el: e
			})), this.drops[e]
		},
		openDrop: function(e) {
			var t = this,
				i = $(e.currentTarget),
				n = i.data("nav-drop-id"),
				s = this.getDrop(n);

			console.log('open drop');
				
			return this.$html.hasClass("no-csstransitions") && this.blockHoverOpen ? void(this.blockHoverOpen = !1) : (this.clearTimeout(e), null !== this.currentDrop && s !== this.currentDrop && t.hideDrop(), this.state = "opening", void t.showDrop(s, n, i))
		},
		showDrop: function(e, t, i) {
			i.hasClass("js-slide") ? e.forward() : e.show(), vc.app.trigger("mask:show"), this.$html.find(".nav-list-item").removeClass("on"), this.$html.find(".nav-list").find('[data-nav-drop-id="' + t + '"]').addClass("on"), this.navDrop.addClass("on"), this.$html.addClass("nav-drop-on"), this.currentDrop = e;

			//cambios mios
			$('.boton_contacto_menu').addClass('on');
      $('.boton_contacto_menu').css('color', '#003057');
      $('.boton_contacto_menu').css('background-color', '#f6f6f6');
			//cambios mios
			var n = this;
			setTimeout(function() {
				n.state = "opened"
			}, 550)
		},
		delayClose: function(e) {
			this.clearTimeout(e), this.state = "closing", vc.app.navTimeout = setTimeout(function() {
				e && e.preventDefault(), vc.app.trigger("navdrop:close")
			}, 200)
		},
		hideDrop: function() {
			//cambios mios
			$('.boton_contacto_menu').removeClass('on'); 
			//cambios mios
      		$('.boton_contacto_menu').css('color', '#ffffff');
      		$('.boton_contacto_menu').css('background-color', 'rgba(255, 255, 255, 0)');
			this.currentDrop && (this.currentDrop.hide(), vc.app.trigger("mask:hide"), this.navDrop.removeClass("on"), this.$html.removeClass("nav-drop-on"), this.$html.find(".nav-list-item").removeClass("on"), this.markActiveItem(), this.currentDrop = null, this.state = "closed")
		},
		fontFlow: function(e) {
			var t = (this.navLogo.position()?this.navLogo.position().left:0),
				i = 0,
				n = this.navPrimary.width(),
				s = this.navPrimary.offset(),
				a = t < this.startLogoPosition ? -1 : t === this.startLogoPosition ? 0 : 1,
				o = function(e, n) {
					return n = 6 | n, (s?s.left:0) + e - i >= t - n
				}, r = .875;
			1 > a && o(n) ? (14 === parseInt(this.$el.css("font-size"), 10) && this.$html.addClass("force-mobile"), this.$el.css("font-size", 14), e && (n *= r, o(n) ? this.$html.addClass("force-mobile") : "14px" === this.$el.css("font-size"))) : 1 === a && (this.$html.hasClass("force-mobile") && !o(this.startPrimaryWidth * r, 50) ? this.$html.removeClass("force-mobile") : vc.app.isMobile() && !this.$html.hasClass("force-mobile") && o(n, 50) ? this.$html.addClass("force-mobile") : o(this.startPrimaryWidth) || this.$html.css("font-size", 16)), this.startLogoPosition = t, this.startPrimaryWidth < n && (this.startPrimaryWidth = n), this.navPrimary.css("visibility", "visible")
		},
		clearTimeout: function(e) {
			e && e.preventDefault(), vc.app.navTimeout && (clearTimeout(vc.app.navTimeout), vc.app.navTimeout = null)
		}
	})
}(),
function() {
	"use strict";
	vc.NavDrop = vc.Nav.extend({
		events: {
			"click .js-drop": "toggleDrop",
			"click .js-slide": "toggleDrop",
			"click .nav-drop-close": "close",
			"mouseover .nav-drop-hotzone": "delayClose",
			"mouseenter .nav-drop-container.on": "clearTimeout"
		},
		close: function(e) {
			e && e.preventDefault(), vc.app.trigger("navdrop:close")
		}
	})
}(),
function() {
	"use strict";
	vc.NavDropItem = Backbone.View.extend({
		initialize: function() {
			var e = vc.app.$html;
			this.navDropContainer = e.find("#nav-drop").find(".nav-drop-container"), this.navDropItems = e.find("#nav-drop").find(".nav-drop-items"), this.listenTo(vc.app, "app:escapeKeyPressed", this.close)
		},
		events: {
			"click .nav-drop-item-back": "back",
			"click .nav-drop-item-toggle": "toggleDropItem"
		},
		addClasses: function(e) {
			e.parents(".nav-drop-container").addClass("on"), e.parent(".nav-drop-items").addClass("on"), e.addClass("on")
		},
		removeClasses: function(e) {
			this.navDropContainer.removeClass("on"), this.navDropItems.removeClass("on"), e.removeClass("on")
		},
		close: function(e) {
			e && e.preventDefault(), vc.app.trigger("navdrop:close")
		},
		show: function() {
			this.addClasses(this.$el)
		},
		hide: function() {
			void 0 === this.el && (this.$el = this.navDropItems.find(".nav-drop-item.on")), this.removeClasses(this.$el)
		},
		forward: function() {
			this.navDropItems.addClass("on"), this.addClasses(this.$el)
		},
		back: function() {
			this.removeClasses(this.$el)
		},
		toggleDropItem: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget).siblings(".nav-drop-body-row"),
				i = $(e.currentTarget).find(".icon");
			t.toggleClass("on"), i.hasClass("icon-angle-down") ? i.removeClass("icon-angle-down").addClass("icon-angle-up") : i.removeClass("icon-angle-up").addClass("icon-angle-down")
		}
	})
}(),
function() {
	"use strict";
	vc.SubNav = Backbone.View.extend({
		initialize: function() {
			this.$sel = this.$el.find("#subnav-select-input"), this.$val = this.$el.find("#subnav-select-value"), this.$title = this.$el.find(".subnav-select-title"), this.offset = 70, this.$html = $("html"), this.$html.addClass("is-subnav-fixed"), this.updateSelectValue(), this.listenTo(vc.app, "app:scrolled", this.changePosition)
		},
		events: {
			"change #subnav-select-input": "updateSelectValue"
		},
		updateSelectValue: function(e) {
			if (e && e.preventDefault(), this.$val.html(this.$sel.find("option[selected]").text()), this.$sel.length && 0 === this.$sel.get(0).selectedIndex && this.$title.hide(), e) {
				var t = this.$sel.find("option:selected"),
					i = t.val();
				i !== window.location.pathname && ("_blank" === t.data("target") ? window.open(i, "_new") : window.location.href = i)
			}
		},
		changePosition: function() {
			var e = vc.app.$window.scrollTop(),
				t = e > this.offset;
			this.$html.toggleClass("is-subnav-fixed-on", t)
		}
	})
}(),
function() {
	"use strict";
	vc.NavScroll = Backbone.View.extend({
		initialize: function() {
			var e = this;
			this.$html = vc.app.$html, this.navScroll = vc.app.$html.find(".navScroll"), this.navScroll.fadeOut(), this.footerContainer = vc.app.$html.find(".footer"), this.listenTo(vc.app, "app:scrolled", this.bodyScrolled), $(window).on("resize", function() {
				e.bodyScrolled()
			}), this.bodyScrolled()
		},
		scrollTop: 0,
		bigEnough: !1,
		timeout: null,
		events: {},
		showScroll: function() {
			0 === this.scrollTop && this.bigEnough ? this.navScroll.removeClass("backtotop").fadeIn("slow") : this.scrollTop > 1200 && this.bigEnough && this.navScroll.addClass("backtotop").fadeIn("slow")
		},
		hideScroll: function() {
			this.navScroll.fadeOut(0)
		},
		bodyScrolled: function() {
			var e = this;
			this.bigEnough = vc.app.$window.width() >= 1024, this.scrollTop = vc.app.$window.scrollTop(), this.scrollTop > 0 ? this.navScroll.addClass("right") : this.navScroll.removeClass("right"), this.timeout && clearTimeout(this.timeout), this.bigEnough && (this.scrollTop <= 1200 && this.hideScroll(), this.timeout = setTimeout(function() {
				e.showScroll()
			}, 750))
		}
	})
}(),
function() {
	"use strict";
	vc.Overlay = Backbone.View.extend({
		className: "overlay",
		tmpl: templates["overlay-framework"],
		initialize: function() {
			this.listenTo(vc.app, "mask:hide", this.remove), this.listenTo(vc.app, "mask:show", this.show)
		},
		events: {
			click: "clicked",
			"click .overlay-close": "close"
		},
		keyboardEvents: {
			esc: "close"
		},
		clicked: function(e) {
			e.stopPropagation()
		},
		close: function(e) {
			e.preventDefault(), e.stopPropagation(), vc.app.trigger("mask:hide")
		},
		show: function() {
			var e = this;
			setTimeout(function() {
				e.$el.addClass("overlay-show"), vc.app.trigger("overlay:enabled")
			}, 10)
		},
		remove: function() {
			this.$el.addClass("overlay-hide"), vc.app.trigger("overlay:disabled");
			var e = _.bind(Backbone.View.prototype.remove, this);
			setTimeout(e, 500)
		},
		render: function() {
			return this.$el.html(this.model ? this.tmpl.render(this.model.toJSON()) : this.tmpl.render()), vc.app.trigger("mask:show"), this
		}
	})
}(),
function() {
	"use strict";
	vc.AccordionItem = Backbone.View.extend({
		tagName: "li",
		initialize: function(e) {
			_.bindAll(this, "togglerClicked", "resizedWindow"), this.animate = e.animate, this.displayType = "block", $(window).on("resize", this.resizedWindow)
		},
		events: {
			"click .accordion-panel-toggle": "togglerClicked"
		},
		setExpanded: function(e) {
			this.animate && $.support.transition ? this.animateExpanded(e) : this.$el.toggleClass("expanded", e), this.$arrow && this.$arrow.toggleClass("icon-angle-down", !e).toggleClass("icon-angle-up", e)
		},
		animateExpanded: function(e) {
			var t = this,
				i = this.$(".accordion-content");
			if (!e) return void i.transition({
				height: 0
			}, function() {
				i.parent().toggleClass("expanded", e), t.trigger("expanded")
			});
			i = this.$(".accordion-content").css({
				display: this.displayType,
				height: "auto"
			});
			var n = i.height();
			i.css({
				height: 0
			}).transition({
				height: n
			}, function() {
				i.parent().toggleClass("expanded", e)
			})
		},
		togglerClicked: function(e) {
			e.preventDefault();
			var t = !this.$el.hasClass("expanded");
			this.setExpanded(t)
		},
		resizedWindow: function() {
			var e = this.$(".accordion-content").css({
				height: "auto"
			}),
				t = e.height();
			e.css({
				height: t
			})
		},
		render: function() {
			return this.$arrow = this.$(".accordion-arrow"), this
		}
	})
}(),
function() {
	"use strict";
	vc.AccordionTableItem = vc.AccordionItem.extend({
		tagName: "tr",
		initialize: function(e) {
			_.bindAll(this, "togglerClicked", "resizedWindow"), this.animate = e.animate, this.content = this.$(".accordion-content"), this.displayType = "table", $(window).on("resize", this.resizedWindow)
		},
		setExpanded: function(e) {
			if (this.animate && $.support.transition) this.animateExpanded(e);
			else {
				var t = this.$el.find("> td:first-child");
				t.toggleClass("expanded", e), t.hasClass("expanded") ? t.removeClass("collapsed") : t.addClass("collapsed")
			}
			this.$arrow.toggleClass("icon-angle-down", !e).toggleClass("icon-angle-up", e)
		},
		togglerClicked: function(e) {
			e.preventDefault();
			var t = this.content.length > 0 ? !this.content.parent().hasClass("expanded") : !1;
			this.setExpanded(t)
		},
		animateExpanded: function(e) {
			var t = this,
				i = this.content;
			if (!e) return void i.fadeOut().transition({
				display: "block",
				height: 0
			}, function() {
				i.parent().toggleClass("expanded", e), t.trigger("expanded")
			});
			i = this.content.css({
				display: this.displayType,
				height: "auto"
			});
			var n = i.height();
			i.css({
				height: 0
			}).transition({
				height: n,
				display: this.displayTable
			}, function() {
				i.parent().toggleClass("expanded", e)
			})
		}
	})
}(),
function() {
	"use strict";
	vc.Accordion = Backbone.View.extend({
		className: "accordion",
		itemView: vc.AccordionItem,
		render: function() {
			this.animate = void 0 !== this.$el.data("animate");
			var e = this,
				t = "";
			switch (this.$el.length > 0 && (t = this.$el[0].tagName.toLowerCase()), t) {
				case "ol":
				case "ul":
					this.childTag = "li";
					break;
				case "table":
					this.childTag = "tbody > tr", this.itemView = vc.AccordionTableItem;
					break;
				default:
					this.childTag = "div"
			}
			return this.$("> " + this.childTag).each(function(t, i) {
				var n = new e.itemView({
					el: i,
					animate: this.animate
				});
				n.render()
			}), this
		}
	})
}(),
function() {
	"use strict";
	vc.StoryAccordionItem = vc.AccordionItem.extend({
		initialize: function(e) {
			_.bindAll(this, "buttonClicked", "itemClicked", "modelChanged", "animateExpanded"), this.animate = e.animate, this.displayType = "block", $(window).on("resize", this.resizedWindow), this.listenTo(this.model, "change", this.modelChanged)
		},
		events: {
			"click .accordion-panel-toggle": "buttonClicked",
			click: "itemClicked"
		},
		buttonClicked: function() {
			var e = this.model.collection.where({
				active: !0
			});
			e && e.forEach(function(e) {
				e.set({
					active: !1
				})
			}), this.model.set({
				active: !0
			})
		},
		itemClicked: function() {
			this.trigger("storyAccordionItem:clicked")
		},
		resizedWindow: function() {},
		modelChanged: function(e) {
			var t = e.changedAttributes();
			"active" in t && (this.setExpanded(t.active), this.video && this.video.player.pause())
		},
		getVideo: function(e) {
			if (e) {
				var t = {}, i = e.split(";");
				return _.each(i, function(e) {
					var i = e.split(":");
					t[i[0]] = i[1].split(",")
				}), t
			}
		},
		determineVideoToDisplay: function(e) {
			if (e) {
				var t = $(window).width();
				return t > 1e3 && e.large ? e.large : t > 500 && e.medium ? e.medium : e.small ? e.small : e.large || e.medium || e.small
			}
		},
		animateExpanded: function(e) {
			this.animationCount = this.animationCount + 1 || 1, 1 === this.animationCount && e && this.model.collection.first() === this.model ? setTimeout(function() {
				vc.AccordionItem.prototype.animateExpanded.call(this, e)
			}.bind(this), 0) : vc.AccordionItem.prototype.animateExpanded.call(this, e)
		},
		render: function() {
			var e = this;
			return this.$(".accordion-content-video").each(function() {
				if (this.getAttribute("data-video")) {
					var t = $(this),
						i = $("img", t),
						n = i.attr("src"),
						s = $("a", e.$el).first().attr("id");
					if (t.length > 0) {
						t.attr("id", s + "-modal");
						var a = e.getVideo(t.data("video"));
						a = e.determineVideoToDisplay(a);
						var o = '<video id="' + s + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + n + '" controls="controls" class="mediaelement" preload="none">';
						o += '<source type="video/mp4" src="' + a[1] + '" title="480p SD" />', a.length > 1 && (o += '<source type="video/webm" src="' + a[0] + '" title="480p SD" />'), o += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', o += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', o += '<param name="flashvars" value="controls=true&amp;file=' + a[1] + '" />', o += '<img src="' + n + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', o += "</object>", o += "</video>", t.append(o), setTimeout(function() {
							e.video = new vc.Video({
								el: t
							}), i.hide()
						}, 100)
					}
				}
			}), this
		}
	})
}(),
function() {
	"use strict";
	vc.StoryAccordion = vc.Accordion.extend({
		itemView: null,
		initialize: function() {
			_.bindAll(this, "createButton", "adjustNavigationHeight"), this.collection = new vc.CarouselItemCollection, this.createButtonsForAll(), this.mobileWidth = 769, this.autoRunInterval = 5e3, this.triggerAutoRun(), $(window).on("resize", this.adjustNavigationHeight)
		},
		triggerAutoRun: function() {
			var e, t, i;
			this.autoRun = setInterval(_.bind(function() {
				vc.app.$window.width() < this.mobileWidth || (e = this.collection.findWhere({
					active: !0
				}), t = this.collection.indexOf(e), i = this.collection.at(t + 1), e.set({
					active: !1
				}), i ? i.set({
					active: !0
				}) : this.collection.first().set({
					active: !0
				}))
			}, this), this.autoRunInterval)
		},
		disableAutoRun: function() {
			this.autoRun && (clearInterval(this.autoRun), this.autoRun = !1)
		},
		createButtonsForAll: function() {
			this.$el.find("li").each(this.createButton)
		},
		createButtonsForItem: function(e) {
			var t = this.collection.indexOf(e),
				i = this.$el.find("li").eq(t);
			this.createButton(e, i)
		},
		createButton: function(e, t) {
			var i = $(t);
			this.animate = void 0 !== this.$el.data("animate");
			var n = this.collection.add({
				id: i.attr("id")
			}),
				s = new vc.StoryAccordionItem({
					el: t,
					model: n,
					animate: !0
				});
			0 === e && n.set({
				active: !0
			}), n.view = s.render(), this.listenTo(s, "storyAccordionItem:clicked", this.disableAutoRun)
		},
		adjustNavigationHeight: function() {
			var e = this.$(".accordion-content-video").first().height();
			e && this.$el.height(e)
		},
		render: function() {
			setTimeout(function() {
				this.adjustNavigationHeight()
			}.bind(this), 0)
		}
	})
}(),
function() {
	"use strict";
	vc.LanguageTunnel = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "resizedWindow", "setSize", "regionToggle"), $(window).on("resize", this.resizedWindow), this.$regions = this.$el.find(".lt-regions"), this.setSize(), this.fadeInBackground()
		},
		events: {
			"click .lt-region-toggle": "regionToggle"
		},
		regionToggle: function(e) {
			if (e.preventDefault(), !(vc.app.currentDevice.minWidth >= 480)) {
				var t = $(e.currentTarget).siblings(".lt-countries"),
					i = $(e.currentTarget).find(".icon");
				t.toggle(), i.hasClass("icon-angle-down") ? i.removeClass("icon-angle-down").addClass("icon-angle-up") : i.removeClass("icon-angle-up").addClass("icon-angle-down")
			}
		},
		fadeInBackground: function() {
			var e = $(".lt-background"),
				t = "data-temp-src",
				i = $(".lt-background-container");
			e.hide(), e.attr(t, e.attr("src")), e.attr("src", ""), i.show(), e.one("load", function() {
				e.fadeIn({
					duration: 400
				})
			}).attr("src", e.attr(t)).each(function() {
				this.complete && $(this).load()
			})
		},
		resizedWindow: function() {
			if (vc.app.currentDevice.minWidth >= 480) {
				var e = this.$regions.find(".lt-countries"),
					t = this.$regions.find(".lt-region-toggle icon");
				e.show(), t.removeClass("icon-angle-down").addClass("icon-angle-up")
			}
			this.setSize()
		},
		setSize: function() {
			var e = $(".lt-content-wrapper").outerHeight(),
				t = window.innerHeight,
				i = e > t ? e : t;
			this.$el.css("height", i)
		}
	})
}(),
function() {
	"use strict";
	vc.CarouselItemView = Backbone.View.extend({
		className: "carousel-item",
		initialize: function() {
			this.listenTo(this.model, "change", this.modelChanged)
		},
		modelChanged: function(e) {
			var t = e.changedAttributes();
			"active" in t && this.$el.toggleClass("active", t.active)
		}
	})
}(),
function() {
	"use strict";
	vc.Carousel = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "dragStart", "drag", "dragEnd", "next", "prev"), this.listenTo(this.collection, "change:active", this.activeItemChanged)
		},
		hammerEvents: function() {
			return Modernizr.touch ? {
				dragleft: "dragStart",
				dragright: "dragStart"
			} : {}
		},
		activeItemChanged: function(e, t) {
			if (this.dragging) return this.animateDragChange(e, t);
			var i = e.get("direction");
			return t ? this.animateActivate(e, i) : this.animateDeactivate(e, i)
		},
		animateActivate: function(e, t) {
			var i = "left" === t ? "-2%" : "2%",
				n = $.support.transform ? {
					x: i,
					opacity: 0
				} : {
					left: i,
					opacity: 0
				}, s = $.support.transform ? {
					x: "0%",
					opacity: 1
				} : {
					left: "0%",
					opacity: 1
				};
			e.view.$el.stop().show().css(n).transition(s, 500)
		},
		animateDeactivate: function(e, t) {
			var i = "left" === t ? "-2%" : "2%",
				n = $.support.transform ? {
					x: "0%",
					opacity: 1
				} : {
					left: "0%",
					opacity: 1
				}, s = $.support.transform ? {
					x: i,
					opacity: 0
				} : {
					left: i,
					opacity: 0
				};
			e.view.$el.stop().css(n), $.when(e.view.$el.transition(s, 500)).then(function() {
				e.view.$el.hide()
			})
		},
		animateDragChange: function(e, t) {
			var i;
			if (t) i = $.support.transform ? {
				x: "0%"
			} : {
				left: "0%"
			};
			else {
				var n = e.get("direction"),
					s = "left" === n ? "-100%" : "100%";
				i = $.support.transform ? {
					x: s
				} : {
					left: s
				}
			}
			e.view.$el.transition(i)
		},
		dragStart: function(e) {
			if (!this.dragging) {
				this.dragging = !0, this.killHammerEvents(e), this.currentItem = this.collection.activeItem(), this.prevItem = this.collection.prevItem(), this.nextItem = this.collection.nextItem();
				var t = {
					opacity: 1,
					filter: "alpha(opacity=100)"
				};
				this.currentItem.view.$el.show().css(t), this.prevItem.view.$el.show().css(t), this.nextItem.view.$el.show().css(t), this.$el.toggleClass("dragging", this.dragging), vc.app.$body.hammer({
					dragLockToAxis: !0,
					dragBlockHorizontal: !0
				}).on("dragleft." + this.cid, this.drag).on("dragright." + this.cid, this.drag).on("dragend." + this.cid, this.dragEnd)
			}
		},
		drag: function(e) {
			this.killHammerEvents(e);
			var t = this.dragPercent = Math.round(e.gesture.deltaX / this.$el.width() * 100);
			$.support.transform ? (this.currentItem.view.$el.css({
				x: t + "%"
			}), this.prevItem.view.$el.css({
				x: t - 100 + "%"
			}), this.nextItem.view.$el.css({
				x: t + 100 + "%"
			})) : (this.currentItem.view.$el.css({
				left: t + "%"
			}), this.prevItem.view.$el.css({
				left: t - 100 + "%"
			}), this.nextItem.view.$el.css({
				left: t + 100 + "%"
			}))
		},
		dragEnd: function(e) {
			this.killHammerEvents(e), this.dragPercent = 0, vc.app.$body.hammer().off("." + this.cid);
			var t = Math.abs(e.gesture.deltaX) / this.$el.width() * 100,
				i = t * Math.max(1, e.gesture.velocityX);
			if (i > 30) {
				var n = e.gesture.direction === Hammer.DIRECTION_LEFT;
				return n ? this.next() : this.prev(), this.dragging = !1, void this.$el.toggleClass("dragging", this.dragging)
			}
			$.support.transform ? (this.currentItem.view.$el.transition({
				x: "0%"
			}), this.prevItem.view.$el.transition({
				x: "-100%"
			}), this.nextItem.view.$el.transition({
				x: "100%"
			})) : (this.currentItem.view.$el.transition({
				left: "0%"
			}), this.prevItem.view.$el.transition({
				left: "-100%"
			}), this.nextItem.view.$el.transition({
				left: "100%"
			})), this.dragging = !1, this.$el.toggleClass("dragging", this.dragging)
		},
		next: function() {
			var e = this.collection.nextItem();
			this.collection.activate(e.id)
		},
		prev: function() {
			var e = this.collection.prevItem();
			this.collection.activate(e.id)
		}
	}), vc.mixin(vc.Carousel.prototype, vc.HammerView)
}(),
function() {
	"use strict";
	vc.EnginePicker = Backbone.View.extend({
		initialize: function() {
			$(".picker-group.fuel-picker .picker-item").on("click", this.pickerLinkClicked)
		},
		pickerLinkClicked: function(e) {
			e.preventDefault(), $(".picker-group.fuel-picker .picker-item").removeClass("active");
			var t = $(this);
			t.addClass("active");
			var i = t.find(".picker-link"),
				n = "#" + i.attr("data-toggle");
			$(".picker-group.engine-picker").hide(), $(n).show()
		}
	})
}(),
function() {
	"use strict";
	var e = 1,
		t = [],
		i = [],
		n = [],
		s = null,
		a = null,
		o = function() {
			for (var t = n.filter(function(e, t) {
				return $.inArray(t, i) < 0
			}), s = 0, a = n.length - e; a > s; s++) t[s].checked = !1;
			r.getSelectedEngines()
		}, r = {

			initialize: function() {
				t = $('.pick-engine-box input[name="engine"]'), t.on("change", this.validate), s = $('select[name="feature-set"]').on("change", function() {
					r.toggleFeature(s.val())
				}), $(".dropdown a").on("click", function(e) {
					r.toggleFeature($(e.target).data("dropdown"))
				}), this.getMaxAllowed(), this.setCheckedQuanity(), this.toggleEngines(), this.toggleFeature(s.val()), a = new vc.FeatureOptions.Model, $(window).on("resize", function() {
					r.resize()
				}), $("a.lightbox").bind("click", function(e) {
					e.preventDefault(), r.showOverlay($(e.target))
				})
			},
			showOverlay: function(e) {
				a.set("title", e.attr("title")).set("htmlContent", $(e.attr("href")).html());
				var t = new vc.FeatureOptions.Overlay({
					model: a
				});
				vc.app.$mask.append(t.render().el)
			},
			toggleFeature: function(e) {
				var t = $(".feature-option.active"),
					i = $("#" + e);
				t.length > 0 && t.removeClass("active"), i.addClass("active");
				var n = i.find("li:not(.heading-row-parent)");
				0 === n.filter(".expanded").length && n.eq(0).addClass("expanded").find("i").addClass("icon-angle-up").removeClass("icon-angle-down"), $(window).trigger("resize")
			},
			toggleEngines: function() {
				$.each(t, function(e, t) {
					r.toggleEngine($(t))
				}), n.length >= 2 ? $(".specs-info-wrapper colgroup col:last-child,.feature-option colgroup col:last-child").css("display", "table-column") : $(".specs-info-wrapper colgroup col:last-child,.feature-option colgroup col:last-child").hide()
			},
			toggleEngine: function(e) {
				e.is(":checked") ? r.showEngine(e.attr("value")) : r.hideEngine(e.attr("value"))
			},
			showEngine: function(e) {
				$('[rel="' + e + '"]').show()
			},
			hideEngine: function(e) {
				$('[rel="' + e + '"]').hide()
			},
			getSelectedEngines: function() {
				n = t.filter(":checked")
			},
			setCheckedQuanity: function(i) {
				i || (i = e);
				for (var n = 0; i > n; n++) t.eq(n).attr("checked", !0);
				r.getSelectedEngines()
			},
			validate: function(t) {
				r.getSelectedEngines(), t.target.checked === !0 ? (i.push(t.target), i.length > e && i.shift(), n.length > e && o()) : t.target.checked === !1 && 0 === n.length && (t.target.checked = !0), r.toggleEngines()
			},
			resize: function() {
				if (this.getMaxAllowed(), r.getSelectedEngines(), n.length > e) {
					for (var t = 0; t < i.length - e; t++) i.shift();
					o()
				}
				r.toggleEngines()
			},
			getMaxAllowed: function() {
				var t = $(".pick-engine-box .max-allowed:visible");
				e = t.length > 0 ? parseInt(t.data("max-allowed-compare"), 10) : 1
			}
		};
	vc.USEnginePicker = Backbone.View.extend(r)
}(),
function() {
	"use strict";
	vc.Filter = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "updateResults"), this.$criteria = $(".filter-criteria"), this.$items = $(".filter-item")
		},
		events: {
			"click .filter-criteria input": "updateResults"
		},
		updateResults: function() {
			var e = this.$criteria.find(".job-filter-country input:not(:checked)"),
				t = this.$criteria.find(".job-filter-category input:not(:checked)"),
				i = this.$items;
			i.show(), e.each(function() {
				var e = $(this);
				i.filter("[data-" + e.attr("name") + '="' + e.val() + '"]').hide()
			}), t.each(function() {
				var e = $(this);
				i.filter("[data-" + e.attr("name") + '="' + e.val() + '"]').hide()
			})
		}
	})
}(),
function() {
	"use strict";
	vc.Tabs = Backbone.View.extend({
		initialize: function() {},
		events: {
			"click .tabs-button": "clickTab"
		},
		clickTab: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget),
				i = $(e.delegateTarget),
				n = t.data("tabs-item"),
				s = i.find('li[data-tabs-item="' + n + '"]');
			i.find(".tabs-button").removeClass("tabs-button-active"), i.find(".tabs-item").removeClass("tabs-item-active"), t.addClass("tabs-button-active"), s.addClass("tabs-item-active")
		}
	})
}(),
function() {
	"use strict";
	vc.HeroGroup = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "heroToggled", "leftGroup"), this.listenTo(vc.app, "device:changed", this.deviceChanged)
		},
		events: function() {
			return vc.app.currentDevice.minWidth >= 769 && Modernizr.video ? {
				"mouseenter .hero-content": "heroToggled",
				mouseleave: "leftGroup"
			} : {}
		},
		hammerEvents: function() {
			return Modernizr.touch && Modernizr.video ? {
				"tap .hero-content": "heroToggled"
			} : {}
		},
		deviceChanged: function() {
			this.undelegateEvents(), this.delegateEvents()
		},
		heroToggled: function(e) {
			var t = $(e.currentTarget),
				i = t.siblings(".hero-background");
			this.$backgrounds.css({
				opacity: 0,
				filter: "alpha(opacity=0)"
			}), i.css({
				opacity: 1,
				filter: "alpha(opacity=100)"
			}), this.$backgrounds.find("video").each(function(e, t) {
				t.pause()
			}), i.find("video").each(function(e, t) {
				t.play()
			})
		},
		leftGroup: function() {
			this.$backgrounds.css({
				opacity: 0,
				filter: "alpha(opacity=0)"
			}), this.$backgrounds.first().css({
				opacity: 1,
				filter: "alpha(opacity=100)"
			}), this.$backgrounds.first().find("video").each(function(e, t) {
				t.play()
			})
		},
		render: function() {
			return this.$backgrounds = this.$(".hero-background"), this
		}
	})
}(),
function() {
	"use strict";
	vc.HeroBackground = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "imageloaded")
		},
		enteredViewport: function() {
			this.$el.parents(".hero").addClass("hero-visible")
		},
		videoStartedPlaying: function() {
			vc.ResponsiveVideo.videoStartedPlaying.apply(this, arguments);
			var e = parseFloat(this.$el.data("aspect-ratio"));
			this.startFillingContainer({
				el: this.$bgVideo,
				aspectRatio: e ? e : 16 / 9
			}), this.stopFillingContainer(this.$bgImg), _.defer(_.bind(function() {
				this.$bgVideo.toggleClass("playing", !0), this.$bgImg.toggleClass("hide-img", !0)
			}, this))
		},
		stopVideo: function() {
			vc.ResponsiveVideo.stopVideo.apply(this, arguments), this.$bgImg.toggleClass("hide-img", !1), this.stopFillingContainer(this.$bgVideo)
		},
		render: function() {
			this.$bgImg = this.$("img");
			var e = parseFloat(this.$el.data("aspect-ratio")),
				t = {
					el: this.$bgImg,
					method: this.$el.data("scale-method"),
					aspectRatio: e ? e : 16 / 9
				}, i = this.$el.data("alignment");
			if (i) {
				for (var n = i.split(","), s = 0; s < n.length; s++) {
					var a = parseFloat(n[s]);
					_.isNaN(a) && (a = .5), n[s] = a
				}
				n.length < 2 && n.push(.5), t.alignment = n
			}
			return this.startFillingContainer(t), this.hasVideo() && this.createVideo(), this.$bgImg.length && this.$bgImg[0].naturalHeight ? this.imageloaded() : this.$bgImg.on("load", this.imageloaded), this
		},
		imageloaded: function() {
			this.$el.parents(".hero").addClass("hero-loaded")
		}
	}), vc.mixin(vc.HeroBackground.prototype, vc.ElementFillContainer, vc.ResponsiveVideo)
}(),
function() {
	"use strict";
	vc.StandardHero = Backbone.View.extend({
		minHeights: {
			small: 550,
			medium: 550,
			large: 600,
			"extra-large": 600
		},
		initialize: function() {
			_.bindAll(this, "setSize"), $(window).on("resize." + this.cid, this.setSize)
		},
		setSize: function() {
			var e = this.minHeights[vc.app.currentDevice.name],
				t = Math.max(e, Math.floor(.8 * vc.app.$window.height()));
			this.$el.css({
				height: t
			})
		},
		remove: function() {
			$(window).off("resize." + this.cid), Backbone.View.prototype.remove.call(this)
		},
		render: function() {
			return this.setSize(), this.heroBackground = new vc.HeroBackground({
				el: this.$(".hero-background")
			}), this.heroBackground.render(), this
		}
	})
}(),
function() {
	"use strict";
	vc.FullscreenHero = vc.StandardHero.extend({
		setSize: function() {
			this.$el.css({
				height: Math.max(vc.app.$window.height(), this.getMinHeight())
			})
		},
		getMinHeight: function() {
			var e = $(".nav").height() || 0,
				t = this.$el.find(".hero-content-box").height() || 0;
			return 2 * e + t
		}
	})
}(),
function() {
	"use strict";
	vc.Countdown = Backbone.View.extend({
		initialize: function() {
			var e, t = this.$el.find(".to"),
				i = new Date(t.attr("data-countdown-to")),
				n = t.find(".days .value"),
				s = t.find(".hours .value"),
				a = t.find(".minutes .value"),
				o = t.find(".seconds .value"),
				r = function() {
					e = vc.timeDiff(i, new Date), n.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.days : 0, 2)), s.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.hours : 0, 2)), a.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.minutes : 0, 2)), o.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.seconds : 0, 2))
				};
			r(), e.days > 0 ? setInterval(r, 1e3) : this.$el.hide()
		}
	})
}(),
function() {
	"use strict";
	vc.Background = Backbone.View.extend({
		minWidth: 1024,
		initialize: function() {
			vc.app.$window.on("resize." + this.cid, _.bind(this.setImageSize, this)), this.setImageSize()
		},
		setImageSize: function() {
			var e = this.$el.find("img");
			if (vc.app.$window.width() < this.minWidth) {
				var t = this.minWidth - vc.app.$window.width(),
					i = t / 2;
				e.css({
					width: this.minWidth,
					"max-width": this.minWidth,
					left: -i
				})
			} else e.css({
				width: "100%",
				"max-width": "100%",
				left: "0"
			})
		}
	})
}(),
function() {
	"use strict";
	vc.Pagination = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "buttonClick"), this.listenTo(this.model, "change:numberOfPages", this.render), this.listenTo(this.model, "change:currentPageIndex", this.currentPageChanged)
		},
		events: {
			"click li .button": "buttonClick"
		},
		currentPageChanged: function(e, t) {
			this.$(".button").removeClass("button-active").eq(t).addClass("button-active")
		},
		buttonClick: function(e) {
			e.preventDefault();
			var t = this.$(".button").index(e.currentTarget);
			this.model.set("currentPageIndex", t)
		}
	})
}(),
function() {
	"use strict";
	vc.StoryCarouselItem = Backbone.View.extend({}), vc.mixin(vc.StoryCarouselItem.prototype, vc.ResponsiveVideo)
}(),
function() {
	"use strict";
	vc.StoryCarouselCarousel = vc.Carousel.extend({
		initialize: function() {
			vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createItemView")
		},
		events: {
			"scroll-spy:half-mark": "halfVisible",
			"scroll-spy:enter-viewport": "enteredViewport",
			"scroll-spy:leave-viewport": "leftViewport"
		},
		halfVisible: function() {},
		enteredViewport: function() {
			Mousetrap.bind("right", this.next), Mousetrap.bind("left", this.prev)
		},
		leftViewport: function() {
			Mousetrap.unbind(["right", "left"])
		},
		createItemView: function(e, t) {
			var i = $(t),
				n = this.collection.add({
					id: i.attr("id")
				}),
				s = new vc.StoryCarouselItem({
					el: t,
					model: n
				});
			n.view = s.render()
		},
		render: function() {
			return 1 === this.$("> li").length ? $(this.el).closest(".story-carousel").addClass("story-carousel-single") : this.$("> li").each(this.createItemView), this
		}
	}), vc.mixin(vc.StoryCarouselCarousel.prototype, vc.ScrollSpy)
}(),
function() {
	"use strict";
	vc.StoryCarouselButton = Backbone.View.extend({
		initialize: function(e) {
			this.router = e.router, this.listenTo(this.model, "change:active", this.activeChanged)
		},
		events: {
			click: "clicked"
		},
		activeChanged: function(e, t) {
			this.$el.toggleClass("button-active", t)
		},
		clicked: function(e) {
			e.preventDefault();
			var t = this.model.collection.id + "/" + this.model.id;
			this.router.navigate(t, {
				trigger: !0
			})
		}
	})
}(),
function() {
	"use strict";
	vc.StoryCarousel = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "createButtonsForItem", "createButton"), this.collection = new vc.CarouselItemCollection, this.collection.id = this.$el.attr("id"), this.listenTo(this.collection, "change:active", this.activeChanged), this.router = new vc.StoryCarouselRouter({
				collection: this.collection
			})
		},
		createButtonsForAll: function() {
			this.collection.forEach(this.createButtonsForItem)
		},
		createButtonsForItem: function(e) {
			var t = this.collection.indexOf(e),
				i = this.$buttons.find(".button").eq(t),
				n = this.$dots.find(".button").eq(t);
			this.createButton(e, i), this.createButton(e, n)
		},
		createButton: function(e, t) {
			var i = new vc.StoryCarouselButton({
				router: this.router,
				model: e,
				el: t
			});
			i.render()
		},
		render: function() {
			this.$buttons = this.$(".story-buttons"), this.$dots = this.$(".story-dots"), this.carousel = new vc.StoryCarouselCarousel({
				el: this.$(".carousel"),
				collection: this.collection
			}), this.carousel.render();
			var e = this.collection.first();
			return e && e.set({
				active: !0
			}), this.createButtonsForAll(), this
		}
	})
}(),
function() {
	"use strict";
	vc.StoryStream = Backbone.View.extend({
		tmpl: templates["story-stream-item"],
		overlay: templates["story-stream-overlay"],
		initialize: function() {
			_.bindAll(this, "getTheme", "fetchData", "fetchSuccess", "fetchError", "renderStream"), this.collection = new vc.StoryStreamItemCollection, this.$storyStreamItems = this.$el.find(".story-stream-items"), this.storyName = this.$el.data("storyName"), this.isotopeSettings = {
				percentPosition: !0,
				itemSelector: ".story-stream-item",
				layoutMode: "masonry"
			}, this.getTheme(), this.fetchData()
		},
		events: {
			"click .ss-overlay-show": "showOverlay"
		},
		getTheme: function() {
			this.theme = this.$el.hasClass("theme-dark") ? "theme-dark" : this.$el.hasClass("theme-white") ? "theme-white" : ""
		},
		fetchData: function(e) {
			this.collection.fetch({
				storyName: this.storyName,
				success: this.fetchSuccess,
				error: this.fetchError
			})
		},
		fetchSuccess: function(e) {
			this.renderStream(e)
		},
		fetchError: function() {
			throw new Error("Could not fetch Story Stream items")
		},
		renderStream: function(e) {
			this.$storyStreamItems.empty(), this.$storyStreamItems.hide();
			for (var t = $("<div>"), i = 0, n = e.models.length; n > i; i++) {
				var s = e.models[i].attributes.parsed;
				t.append(this.tmpl.render(s))
			}
			this.$storyStreamItems.append(t.html());
			var a = _.clone(this);
			imagesLoaded(a.$storyStreamItems, function() {
				a.$storyStreamItems.show(), a.$storyStreamItems.isotope(a.isotopeSettings)
			})
		},
		showOverlay: function(e) {
			e.preventDefault();
			var t = $(e.target),
				i = t.parents(".story-stream-item"),
				n = this.collection.get(i.data("modelId")),
				s = new vc.StoryStream.Overlay({
					model: n.attributes.parsed,
					theme: this.theme
				});
			vc.app.$mask.append(s.render().el)
		}
	})
}(),
function() {
	"use strict";
	vc.StoryStream.Overlay = vc.Overlay.extend({
		className: vc.Overlay.prototype.className + " story-stream-overlay-wrapper",
		tmpl: templates["story-stream-overlay"],
		initialize: function(e) {
			vc.Overlay.prototype.initialize.apply(this, arguments), _.bindAll(this, "setTheme", "render"), this.options = e, this.setTheme()
		},
		setTheme: function() {
			this.options && this.options.theme && this.$el.addClass(this.options.theme)
		},
		render: function() {
			return this.model && (this.$el.html(this.tmpl.render(this.model)), vc.app.trigger("mask:show"), this.listenToOnce(this, "overlay:enabled", this.centerOverlay())), this
		},
		centerOverlay: function() {
			var e = this;
			setTimeout(function() {
				var t = e.$el,
					i = $(window).height(),
					n = t.height(),
					s = i - n;
				s > 0 ? t.css("top", s / 2) : t.css("top", "")
			}, 300)
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryOverlayCarousel = vc.Carousel.extend({
		initialize: function() {
			vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createImageForItem"), this.listenTo(this.collection, "change:zoom", this.itemZoomed)
		},
		itemZoomed: function(e, t) {
			t > 1 ? this.undelegateEvents() : this.delegateEvents()
		},
		activeItemChanged: function(e, t) {
			if (t) {
				var i = this.collection.prevItem(),
					n = this.collection.nextItem(),
					s = [i, e, n];
				_(s).each(this.createImageForItem)
			}
			vc.Carousel.prototype.activeItemChanged.call(this, e, t)
		},
		createImageForItem: function(e) {
			e.view || (e.view = new vc.GalleryOverlayImage({
				model: e
			}), e.view.rootUrl = this.rootUrl, this.$el.append(e.view.render().el))
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryOverlayThumbnail = Backbone.View.extend({
		tagName: "li",
		tmpl: templates["gallery-overlay-thumbnail"],
		initialize: function() {
			_.bindAll(this, "clicked"), this.listenTo(this.model, "change:active", this.activeChanged)
		},
		events: {
			"click a": "clicked"
		},
		clicked: function(e) {
			e.preventDefault();
			var t = (this.rootUrl || "gallery/") + this.model.collection.id;
			t += "/" + this.model.id, vc.galleryRouter.navigate(t, {
				trigger: !0,
				replace: !0
			})
		},
		activeChanged: function(e, t) {
			this.$el.toggleClass("active", t)
		},
		render: function() {
			return this.$el.html(this.tmpl.render(this.model.toJSON())), this
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryOverlayImage = vc.CarouselItemView.extend({
		tagName: "img",
		maxZoom: 4,
		imageVersions: [480, 768, 1024, 2048, 4096],
		initialize: function() {
			vc.CarouselItemView.prototype.initialize.apply(this, arguments), _.bindAll(this, "determineSrc", "setSrc", "calculatePanBounds", "ensurePanBounds", "pinch", "pinchEnd", "pan", "panEnd", "toggleZoom"), this.x = this.y = 0, this.determineSrc = _.throttle(this.determineSrc, 300), this.calculatePanBounds = _.throttle(this.calculatePanBounds, 300), this.listenTo(this.model, "change:active", this.activeChanged), this.listenTo(vc.app, "resize", this.determineSrc)
		},
		activeChanged: function() {
			this.bindHammer()
		},
		bindHammer: function() {
			Modernizr.touch && $.support.transform && $.support.transition && (this.model.get("active") ? this.hammer().on("pinch." + this.cid, this.pinch).on("doubletap." + this.cid, this.toggleZoom) : this.hammer().off("." + this.cid))
		},
		determineSrc: function() {
			for (var e, t = window.devicePixelRatio || 1, i = this.$el.width() * t * this.model.attributes.zoom, n = 0; n < this.imageVersions.length && (e = this.imageVersions[n], !(e >= i)); n++);
			if (this.currentWidth !== e) {
				this.currentWidth = e;
				var s = this.model.get("src") + "?w=" + e;
				this.downloadImage(s).then(this.setSrc)
			}
		},
		setSrc: function(e) {
			var t = this;
			t.$el.one("load", function() {
				t.$el.trigger("src:set"), $(window).resize()
			}), this.el.src = e.src
		},
		toggleZoom: function(e) {
			this.killHammerEvents(e);
			var t = this.model.get("zoom") > 1 ? 1 : this.maxZoom;
			this.zoomToScale(t, !0), this.model.set({
				zoom: t
			})
		},
		zoomToScale: function(e, t) {
			return e > 1 && !this.panAttached ? (this.panAttached = !0, this.hammer().on("drag.pan" + this.cid, this.pan).on("dragend.pan" + this.cid, this.panEnd)) : 1 === e && this.panAttached && (this.panAttached = !1, this.hammer().off(".pan" + this.cid)), t ? void $.when(this.$el.transition({
				scale: e
			})).then(this.determineSrc).then(this.calculatePanBounds).then(this.ensurePanBounds) : (this.$el.css({
				scale: e
			}), void this.determineSrc())
		},
		pinch: function(e) {
			this.killHammerEvents(e);
			var t = this.model.get("zoom");
			this.pinchScale = Math.min(this.maxZoom, Math.max(1, t * e.gesture.scale)), this.zoomToScale(this.pinchScale), this.pinching || (vc.app.$body.hammer().on("release." + this.cid, this.pinchEnd), this.pinching = !0)
		},
		pinchEnd: function(e) {
			this.killHammerEvents(e), this.pinching = !1, this.scale = this.pinchScale, vc.app.$body.hammer().off("release." + this.cid), this.model.set({
				zoom: this.scale
			}), this.calculatePanBounds(), this.ensurePanBounds()
		},
		pan: function(e) {
			this.killHammerEvents(e);
			var t = this.model.attributes.zoom,
				i = (e.gesture.deltaX + this.x) * t / this.$el.width() * 100,
				n = (e.gesture.deltaY + this.y) * t / this.$el.height() * 100;
			this.$el.css({
				x: i,
				y: n
			})
		},
		panEnd: function(e) {
			this.killHammerEvents(e);
			var t = this.model.attributes.zoom;
			this.x = (e.gesture.deltaX + this.x) * t / this.$el.width() * 100, this.y = (e.gesture.deltaY + this.y) * t / this.$el.height() * 100, vc.app.$body.hammer().off("." + this.cid), this.ensurePanBounds()
		},
		calculatePanBounds: function() {
			var e = {
				width: this.$el.width(),
				height: this.$el.height()
			};
			this.maxX = (e.width - e.width / this.scale) / 2, this.maxY = (e.height - e.height / this.scale) / 2
		},
		ensurePanBounds: function() {
			this.x > this.maxX ? this.x = this.maxX : this.x < -this.maxX && (this.x = -this.maxX), this.y > this.maxY ? this.y = this.maxY : this.y < -this.maxY && (this.y = -this.maxY), this.$el.transition({
				x: this.x,
				y: this.y
			})
		},
		render: function() {
			return this.$el.toggleClass("active", this.model.get("active")), this.bindHammer(), _.defer(this.determineSrc), this
		}
	}), vc.mixin(vc.GalleryOverlayImage.prototype, vc.PreloadImages, vc.HammerView)
}(),
function() {
	"use strict";
	var e = 16 / 9;
	vc.GalleryOverlay = vc.Overlay.extend({
		className: vc.Overlay.prototype.className + " gallery-overlay",
		tmpl: templates["gallery-overlay"],
		thumbnailWidth: 92,
		thumbnailsHeight: 58,
		padding: 42,
		scrollTop: 0,
		scrollLeft: 0,
		initialize: function() {
			vc.Overlay.prototype.initialize.apply(this, arguments), _.bindAll(this, "itemAdded", "setSize", "next", "prev"), this.listenTo(this.collection, "add", this.itemAdded), this.listenTo(this.collection, "reset", this.itemsReset), this.listenTo(this.collection, "change:active", this.activeItemChanged), this.listenTo(vc.app, "resize", this.setSize), this.pinching = !1
		},
		events: _.extend({}, _.result(vc.Overlay.prototype, "events"), {
			"click .prev": "prev",
			"click .next": "next",
			"src:set": "onSrcSet"
		}),
		keyboardEvents: _.extend({}, _.result(vc.Overlay.prototype, "keyboardEvents"), {
			left: "prev",
			right: "next"
		}),
		setSize: function() {
			if (this.carousel) {
				var t, i, n, s = vc.app.$window.width() / vc.app.$window.height();
				s > e ? (t = vc.app.$window.height(), i = t * e - this.thumbnailsHeight - this.padding) : (i = vc.app.$window.width(), t = i / e + this.thumbnailsHeight + this.padding), n = (vc.app.$window.height() - t) / 2, 0 > n && (i -= t - vc.app.$window.height(), t = vc.app.$window.height(), n = 0), this.$el.css({
					height: t,
					width: i,
					top: n
				}), this.alignArrows()
			}
		},
		alignArrows: function() {
			var e = this.$arrows.outerHeight(),
				t = this.$arrows.find("i");
			t.css({
				top: (e - t.height()) / 2
			})
		},
		itemAdded: function(e) {
			var t = new vc.GalleryOverlayThumbnail({
				model: e
			});
			t.rootUrl = this.rootUrl, this.$thumbnails.append(t.render().el)
		},
		itemsReset: function(e) {
			this.$thumbnails.empty(), this.$thumbnails.css({
				width: this.thumbnailWidth * e.length
			}), e.each(this.itemAdded)
		},
		activeItemChanged: function(e, t) {
			if (t) {
				var i = this.collection.indexOf(e),
					n = this.thumbnailWidth * (i + 1),
					s = this.$thumbnailsScroller.width(),
					a = this.$thumbnailsScroller.scrollLeft();
				n > a + s ? this.$thumbnailsScroller.animate({
					scrollLeft: n + this.thumbnailWidth / 2 - s
				}) : n - this.thumbnailWidth < a && this.$thumbnailsScroller.animate({
					scrollLeft: n - 1.5 * this.thumbnailWidth
				})
			}
		},
		next: function(e) {
			e && e.preventDefault();
			var t = this.collection.nextItem(),
				i = (this.rootUrl || "gallery/") + this.collection.id + "/" + t.id;
			vc.galleryRouter.navigate(i, {
				trigger: !0,
				replace: !0
			})
		},
		prev: function(e) {
			e && e.preventDefault();
			var t = this.collection.prevItem(),
				i = (this.rootUrl || "gallery/") + this.collection.id + "/" + t.id;
			vc.galleryRouter.navigate(i, {
				trigger: !0,
				replace: !0
			})
		},
		remove: function() {
			vc.galleryRouter.navigate("", {
				trigger: !0
			}), vc.Overlay.prototype.remove.call(this), $(window).scrollTop(this.scrollTop), $(window).scrollLeft(this.scrollLeft)
		},
		render: function() {
			return vc.Overlay.prototype.render.call(this), this.scrollTop = $(window).scrollTop(), this.scrollLeft = $(window).scrollLeft(), this.carousel = new vc.GalleryOverlayCarousel({
				collection: this.collection,
				el: this.$(".carousel")
			}).render(), this.$thumbnailsScroller = this.$(".thumbnails-scroller"), this.$thumbnails = this.$(".thumbnails"), this.$detail = this.$(".detail"), this.$arrows = this.$(".prev, .next"), _.defer(this.setSize),
			this
		},
		onSrcSet: function() {
			this.alignArrows()
		}
	}), vc.mixin(vc.GalleryOverlay.prototype, vc.ElementFillContainer, vc.PreloadImages)
}(),
function() {
	"use strict";
	vc.GalleryTabsOverlay = vc.GalleryOverlay.extend({
		events: _.extend({}, _.result(vc.GalleryOverlay.prototype, "events"), {
			"click a[data-gallery-id]": "switchGallery"
		}),
		switchGallery: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget).data("gallery-id"),
				i = "galleries/" + this.collection.id + "/" + t;
			vc.galleryRouter.navigate(i, {
				trigger: !0
			})
		},
		render: function() {
			vc.GalleryOverlay.prototype.render.call(this);
			var e = this,
				t = $('<div class="gallery-tabs-buttons-container"></div>'),
				i = $('<ul class="gallery-tabs-buttons clearfix"></ul>'),
				n = "button button-opaque button-light button-small";
			return this.tabs.models.forEach(function(t) {
				i.append(templates["gallery-tabs-buttons"].render(_.extend({
					classes: e.collection.id === t.get("id") ? n + " button-active" : n
				}, t.attributes)))
			}), t.append(i), this.$el.prepend(t), this
		}
	})
}(),
function() {
	"use strict";
	vc.Gallery = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "openGallery"), vc.galleryRouter || (vc.galleryRouter = new vc.GalleryRouter)
		},
		events: {
			"click .trigger-gallery": "openGallery"
		},
		openGallery: function(e) {
			if (e.preventDefault(), !vc.app.isPageEditor) {
				var t = this.$el.data("gallery-id"),
					i = $(e.currentTarget),
					n = i.data("item-id"),
					s = "gallery/" + t;
				n && (s += "/" + n), vc.galleryRouter.navigate(s, {
					trigger: !0
				})
			}
		}
	})
}(),
function() {
	"use strict";
	vc.GalleryTabs = Backbone.View.extend({
		initialize: function() {
			vc.galleryRouter || (vc.galleryRouter = new vc.GalleryRouter), this.tabs = this.$el.find(".gallery-tab"), this.activeTab = this.tabs.eq(0), this.activeTab.addClass("active")
		},
		events: {
			"click .trigger-gallery": "openGallery",
			"click a[data-gallery-tab-id]": "switchGallery"
		},
		openGallery: function(e) {
			if (e.preventDefault(), !vc.app.isPageEditor) {
				var t = this.$el.data("galleries-id"),
					i = $(e.currentTarget),
					n = i.data("gallery-id"),
					s = i.data("item-id"),
					a = "galleries/" + t;
				n && (a += "/" + n), s && (a += "/" + s), vc.galleryRouter.navigate(a, {
					trigger: !0
				})
			}
		},
		switchGallery: function(e) {
			var t = e.currentTarget.attributes["data-gallery-tab-id"].value;
			this.galleryId = t, $("[data-gallery-tab-id]").each(function(e, i) {
				t === i.attributes["data-gallery-tab-id"].value ? $(i).addClass("button-active") : $(i).removeClass("button-active")
			}), this.activeTab.removeClass("active"), this.activeTab = this.$el.find('[data-gallery-id="' + t + '"]'), this.activeTab.addClass("active")
		}
	})
}(),
function() {
	"use strict";
	vc.TwoCols = Backbone.View.extend({
		initialize: function() {}
	})
}(),
function() {
	"use strict";
	vc.StoryGrid = Backbone.View.extend({
		render: function() {
			return this.$(".video-grid-item").each(function(e, t) {
				var i = new vc.VideoStoryGridItem({
					el: t
				});
				i.render()
			}), this
		}
	}), vc.VideoStoryGridItem = Backbone.View.extend({
		videoStartedPlaying: function() {
			vc.ResponsiveVideo.videoStartedPlaying.apply(this, arguments), _.defer(_.bind(function() {
				this.$bgVideo.toggleClass("playing"), this.$bgImg.toggleClass("hide-img")
			}, this))
		},
		render: function() {
			this.$bgImg = this.$("img"), this.hasVideo() && this.createVideo()
		}
	}), vc.mixin(vc.VideoStoryGridItem.prototype, vc.ResponsiveVideo)
}(),
function() {
	"use strict";
	vc.Dropdown = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "dropdownToggle", "dropdownClose", "dropdownItem", "detectMobile", "clicked", "resetDropdown", "disableDropdown", "enableDropdown"), this.$dropdown = this.$el.children(".dropdown"), this.$dropdownActive = this.$el.children(".dropdown-active-item"), this.$dropdownFallback = this.$el.children(".dropdown-fallback"), this.detectMobile()
		},
		events: {
			"click .dropdown-active-item, .dropdown-angle": "dropdownToggle",
			"click .dropdown a": "dropdownItem"
		},
		clicked: function(e) {
			e.preventDefault();
			var t = this.$dropdownActive;
			t.is(e.target) || 0 !== t.has(e.target).length || this.dropdownClose()
		},
		detectMobile: function() {
			vc.app.isMobile() && this.$el.addClass("mobile")
		},
		dropdownToggle: function(e) {
			e.preventDefault(), e.stopPropagation(), this.$el.hasClass("disabled") || (this.$el.hasClass("active") ? this.dropdownClose() : (this.$el.addClass("active"), vc.app.$body.on("click." + this.cid, this.clicked)))
		},
		dropdownClose: function() {
			this.$el.removeClass("active"), vc.app.$body.off("." + this.cid)
		},
		dropdownItem: function(e) {
			var t = $(e.currentTarget),
				i = t.data("dropdown"),
				n = t.html();
			this.$dropdownActive.html(n), this.$dropdownActive.data("dropdownActive", i), this.$dropdownFallback.children("option").removeProp("selected").removeAttr("selected"), this.$dropdownFallback.children('option[value="' + i + '"]').prop("selected", !0).attr("selected", "selected"), this.$dropdownFallback.trigger("change"), this.$el.removeClass("active")
		},
		resetDropdown: function() {
			var e = this.$dropdownFallback.data("defaultLabel");
			this.$dropdown.empty(), this.$dropdownFallback.empty(), this.$dropdownActive.data("dropdownActive", e), this.$dropdownActive.html(e), this.$dropdownFallback.append($("<option></option>").val(e).html(e).attr({
				selected: "selected",
				disabled: "disabled"
			}))
		},
		disableDropdown: function() {
			this.$el.addClass("disabled"), this.$dropdownFallback.prop("disabled", "disabled")
		},
		enableDropdown: function() {
			this.$el.removeClass("disabled"), this.$dropdownFallback.prop("disabled", !1)
		}
	})
}(),
function() {
	"use strict";
	vc.CarConfig = Backbone.View.extend({
		initialize: function() {
			this.offset = 50, this.$html = $("html"), this.$html.addClass("is-car-config")
		}
	})
}(),
function() {
	"use strict";
	vc.Video = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "loadPlayer"), this.$mediaelement = this.$el.find(".mediaelement"), this.$mediaelementId = this.$mediaelement.attr("id"), this.loadPlayer(this.$mediaelementId)
		},
		events: {
			"click .mejs-overlay-play": "togglePlayer"
		},
		loadPlayer: function(e) {
			this.player = new MediaElementPlayer("#" + e, {
				enablePluginDebug: !1,
				plugins: ["flash", "silverlight", "youtube", "vimeo"],
				type: "",
				pluginPath: "/Static/mediaelement/",
				flashName: "flashmediaelement.swf",
				silverlightName: "silverlightmediaelement.xap",
				defaultVideoWidth: 480,
				defaultVideoHeight: 270,
				videoWidth: -1,
				videoHeight: -1,
				pluginWidth: -1,
				pluginHeight: -1,
				audioWidth: 400,
				audioHeight: 30,
				startVolume: .5,
				loop: !1,
				enableAutosize: !0,
				timerRate: 250,
				features: ["progress", "socialshare", "volume", "fullscreen"],
				alwaysShowControls: !0,
				iPadUseNativeControls: !0,
				iPhoneUseNativeControls: !0,
				AndroidUseNativeControls: !0,
				alwaysShowHours: !1,
				showTimecodeFrameCount: !1,
				framesPerSecond: 25,
				enableKeyboard: !0,
				pauseOtherPlayers: !0,
				keyActions: []
			})
		}
	})
}(),
function() {
	"use strict";
	vc.FindYourVolvo = Backbone.View.extend({
		events: {
			"click .start": "startEvent",
			"click li[data-level-id]": "levelChangeEvent",
			"click [data-feature-id] .button": "showModalEvent",
			"click .back": "backEvent",
			"click .reset": "reset",
			"click .overlay .overlay-close": "close"
		},
		levelsEndpoint: "/us/findmyvolvo?id=",
		resultsEndpoint: "/us/findmyvolvo?resultid=",
		levelRootTemplate: templates["fyv-level-root"],
		levelOneChoicesTemplate: templates["fyv-level-one"],
		levelTwoChoicesTemplate: templates["fyv-level-two"],
		levelThreeResultsTemplate: templates["fyv-level-three-results"],
		initialize: function() {
			this.fyvOverlayModel = new Backbone.Model, this.$(".loadError").hide(), this.state = "start", this.levelChange.bind(this), this.start.bind(this), this.getData.bind(this), this.$(".loadError").on("click", this.getData.bind(this)), this.rootLabel = this.$(".level-start>h2").text() || "Find Your Car", this.firstQuestion = this.$el.attr("data-level-one-prompt"), this.modelName = this.$el.attr("data-model-name");
			var e = null !== document.location.href.match(/:3000/);
			e && (this.dev = !0, vc.dictionary = {
				FindYourVolvo: {
					Disclaimer: "*: This is a dev only example disclaimer."
				}
			}, setInterval(function() {
				document.title = "!# Find My Volvo"
			}, 1e3), $(".content").css({
				paddingTop: "70px"
			}), this.levelsEndpoint = "/Static/fyv-levels-mock.json", this.resultsEndpoint = "/Static/fyv-results-mock.json"), this.disclaimer = ((vc.dictionary || {}).FindYourVolvo || {}).Disclaimer, this.getData(), this.render()
		},
		setState: function(e) {
			this.state = e, this.render()
		},
		getData: function() {
			if (void 0 === this.levels) {
				this.$(".loading").show(), this.$(".load-overlay").show(), this.$(".loadError").hide();
				var e = this.$el.attr("data-id");
				this.dev && (e = ""), $.ajax({
					url: this.levelsEndpoint + e,
					dataType: "json",
					context: this
				}).success(function(e) {
					this.levels = e, this.generateLevels(), this.render(), this.$(".load-overlay").hide(), this.$(".loadError").hide()
				}).fail(function() {
					this.$(".load-overlay").show(), this.$(".loadError").show()
				}).always(function() {
					this.$(".loading").hide()
				})
			}
		},
		generateLevels: function(e) {
			e = e || this.levels, $($(this.el).find(".fyv-content")[0]).append(this.levelRootTemplate.render({
				level: e,
				question: this.firstQuestion,
				rootLabel: this.rootLabel
			})), $($(this.el).find(".buttons")[0]).append(this.levelOneChoicesTemplate.render({
				level: e
			}));
			for (var t = 0; t < e.length; t++) {
				var i = e[t],
					n = this.levelTwoChoicesTemplate.render({
						level: i.Level2Answer,
						prevLevel: i.Level1Answer
					});
				$($(this.el).find(".fyv-content")[0]).append(n)
			}
			this.$(".background").not(":visible").each(function() {
				$(this).data("src", this.src), this.src = ""
			}), this.listenTo(vc.app, "resize", this.resize), this.resize(), this.levelsGenerated = !0
		},
		resize: function() {
			this.$(".background").each(function() {
				var e = $(window).width(),
					t = $(this).data("src"),
					i = "";
				481 > e ? i = t + "?h=480" : 769 > e ? i = t + "?h=768" : 1266 > e && (i = t + "?h=1280"), "" === i && (i = t + "?w=1920"), $(this).css({
					backgroundImage: "url('" + i + "')"
				})
			})
		},
		start: function() {
			this.setState("root"), this.render()
		},
		render: function() {
			if ("start" === this.state) $($(this.el).find(".image-mask")[0]).hide(), this.$(".level-start").show(), this.$(".level-root").hide(), this.$(".results").hide(), this.$(".background").removeClass("faded");
			else if ("root" === this.state) $($(this.el).find(".image-mask")[0]).show(), this.$(".level-start").hide(), this.$(".level-root").show(), this.$(".level-2").hide(), this.$(".results").hide(), this.$(".background").addClass("faded");
			else if ("results" === this.state) $($(this.el).find(".image-mask")[0]).hide(), this.$(".level-start").hide(), this.$(".level-root").hide(), this.$(".level-2").hide(), this.$(".results").replaceWith(this.levelThreeResultsTemplate.render({
				modelName: this.modelName,
				results: this.results,
				prevLevel: this.getLevelTwo(this.lastLevel2Id),
				disclaimer: this.disclaimer
			})), this.resize(), this.$(".overlays .overlay").hide(), $(".results").show(), this.$(".background").addClass("faded");
			else {
				var e = this.state;
				$($(this.el).find(".image-mask")[0]).hide();
				var t = this.$('[data-level-id="' + e + '"]');
				t.show(), this.$(".level-root").hide(), this.$(".level-2").hide(), this.$('.level-2[data-level-one-id="' + e + '"]').show(), this.$(".background").addClass("faded"), $(".results").hide()
			}
		},
		showModalEvent: function(e) {
			var t = $(e.target).parents("[data-feature-id]")[0];
			void 0 === t && (t = e.target);
			var i = $(t).attr("data-feature-id");
			this.fyvOverlayModel.set("model", this.getFeatureById(i));
			var n = new vc.FindYourVolvoOverlay({
				model: this.fyvOverlayModel
			});
			vc.app.$mask.append(n.render().el)
		},
		getFeatureById: function(e) {
			if (void 0 === e) return !1;
			for (var t = this.results.Features.length - 1; t >= 0; t--) {
				var i = this.results.Features[t];
				if (i.ID === e) return i
			}
		},
		startEvent: function(e) {
			e = e || window.event;
			var t = e.originalEvent.target || e.target,
				i = $(t).parents(".level-root")[0];
			return this.start(i), !1
		},
		back: function(e) {
			this.setState(void 0 === e ? "start" : $(e).hasClass("results") ? this.lastLevel1Id : "root")
		},
		reset: function() {
			this.setState("start")
		},
		backEvent: function(e) {
			e = e || window.event;
			var t = e.originalEvent.target || e.target,
				i = t;
			return i = $(t).parents("[data-level-one-id]")[0] || $(t).parents("[data-level-id]")[0], void 0 === i && (i = $(t).hasClass("reset") ? t : $(t).parents("[data-results-id]")[0]), this.back(i), !1
		},
		levelChangeEvent: function(e) {
			e = e || window.event;
			var t = e.originalEvent.target || e.target,
				i = t;
			void 0 === $(i).attr("data-level-id") && (i = $(t).parents("[data-level-id]")[0]), this.levelChange(t, i)
		},
		close: function(e) {
			if (e.currentTarget) {
				var t = $(e.currentTarget.parentElement);
				t.hasClass("overlay") && t.removeClass("overlay-show")
			} else $(".overlay.overlay-show").removeClass("overlay-show");
			$("#mask").removeClass("enabled fade-in")
		},
		isIdFromlevelOne: function(e) {
			for (var t = this.levels.length - 1; t >= 0; t--) if (this.levels[t].Level1Answer.ID === e) return "level1";
			return !1
		},
		getLevelTwo: function(e) {
			for (var t = this.levels.length - 1; t >= 0; t--) for (var i = this.levels[t].Level2Answer.length - 1; i >= 0; i--) if (this.levels[t].Level2Answer[i].ID === e) return this.levels[t].Level2Answer[i];
			return !1
		},
		levelChange: function(e, t) {
			var i = $(t).attr("data-level-id");
			$(window).width() < 768 && $("html, body").scrollTop($(this.el).offset().top), this.isIdFromlevelOne(i) ? (this.lastLevel1Id = i, this.setState(i)) : void 0 !== i && "" !== i && (this.lastLevel2Id = i, this.$(".load-overlay").show(), this.$(".loading").show(), this.dev && (i = ""), $.ajax({
				url: this.resultsEndpoint + i,
				dataType: "json",
				context: this
			}).success(function(e) {
				this.results = e, this.setState("results"), this.$(".load-overlay").hide(), this.$(".loadError").hide()
			}).fail(function() {
				this.$(".load-overlay").show(), this.$(".loadError").show()
			}).always(function() {
				this.$(".loading").hide()
			}))
		}
	})
}(),
function() {
	"use strict";
	vc.CarComparison = Backbone.View.extend({
		initialize: function() {
			$(".content").css({
				overflow: "hidden"
			}), this.isSticky = !1, this.$header = this.$(".js-car-comparison-header"), this.$stickyTreshold = this.$(".js-car-comparison-treshold"), this.navHeight = 0, this.initialHeaderPosition = this.$header.position().top, this.listenTo(vc.app, "app:scrolled", this.handleStickiness), this.listenTo(vc.app, "resize", this.resize), this.isMobileSelectOpen = !1, vc.CarComparisonHeader = new vc.CarComparisonHeader({
				el: this.$(".car-selector-slot")
			}), vc.CarComparisonData = new vc.CarComparisonData({
				el: this.$(".car-comparison-data .car-comparison-box-wrapper")
			}), vc.CarComparisonSelector = new vc.CarComparisonSelector({
				el: this.$(".car-selector-overlay .outer-container .container")
			}), this.slots = [{}, {}, {}], this.listenTo(vc.CarComparisonHeader, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonSelector, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonHeader, "engine:changed", this.updateEngine), this.listenTo(vc.CarComparisonHeader, "slot:reset", this.resetSlot), this.listenTo(vc.CarComparisonHeader, "form:clicked", this.selectClicked), this.listenTo(vc.CarComparisonSelector, "overlay:closed", this.overlayClosed), this.listenTo(vc.CarComparisonSelector, "overlay:force", this.overlayForce), this.listenTo(vc.CarComparisonHeader, "carData:loaded", this.cardDataLoaded), this.listenTo(vc.CarComparisonHeader, "car:deeplinked", this.carDeepLinked), this.preload(), this.resize()
		},
		preload: function() {
			var e = 0;
			document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(t, i, n, s) {
				"modelid" === i.toLowerCase() ? vc.CarComparisonHeader.setSelected(e, s) : vc.CarComparisonHeader.setSelected(e, i, s), e++
			}), vc.CarComparisonHeader.fetchCars()
		},
		cardDataLoaded: function() {
			vc.CarComparisonSelector.render(vc.CarComparisonHeader.cars.attributes.AllCars)
		},
		carSelected: function(e, t) {
			vc.CarComparisonHeader.selectCar(e, t)
		},
		resetSlot: function(e) {
			this.slots[e] = {}, vc.CarComparisonData.render(this.slots)
		},
		updateEngine: function(e) {
			var t = new vc.CarVariant,
				i = this;
			t.fetch({
				data: $.param({
					variantId: e.engine,
					modelId: e.model,
					sc_site: vc.settings.sc_site
				}),
				success: _.bind(function(t) {
					i.slots[e.slot] = t.toJSON(), vc.CarComparisonData.render(i.slots)
				})
			})
		},
		selectClicked: function(e) {
			vc.CarComparisonSelector.show(e), $("html, body").animate({
				scrollTop: 0
			}, 400)
		},
		overlayClosed: function(e) {
			vc.CarComparisonHeader.forceClearSlot(e)
		},
		events: {
			"click .js-update-comparison": "scrollToHeader",
			"click .car-comparison-print": "print",
			"click .dropdown-fallback": "selectOpen",
			"change .dropdown-fallback": "selectClosed",
			"blur .dropdown-fallback": "selectClosed",
			"click .close-selector-overlay": "closeOverlay",
			"click .car-selector-overlay-scrim": "closeOverlay"
		},
		selectOpen: function() {
			this.isMobileSelectOpen = !0
		},
		selectClosed: function() {
			this.isMobileSelectOpen = !1
		},
		closeOverlay: function() {
			vc.CarComparisonSelector.closeOverlay()
		},
		resize: function() {
			var e = $(".nav").height();
			e !== this.navHeight && (this.navHeight = e, this.$header.css("top", e), this.handleStickiness())
		},
		handleStickiness: function() {
			var e = 0;
			this.isMobileSelectOpen || (!this.isSticky && $(window).scrollTop() + this.navHeight > this.$stickyTreshold.position().top && (this.isSticky = !0, this.$header.addClass("car-comparision-header--sticky").css("top", this.navHeight), e = this.$header.find(".box-header").height() + this.$stickyTreshold.height() + this.navHeight + parseInt(this.$header.find(".box").css("marginBottom").replace("px", ""), 10), this.$header.after('<div class="car-comparision-header-placeholder" style="height: ' + e + 'px"></div>')), this.isSticky && $(window).scrollTop() < this.$(".car-comparision-header-placeholder").position().top && (this.isSticky = !1, this.$header.removeClass("car-comparision-header--sticky"), this.$(".car-comparision-header-placeholder").remove()))
		},
		scrollToHeader: function(e) {
			e.preventDefault(), $("html, body").animate({
				scrollTop: this.initialHeaderPosition - 1
			}, 400)
		},
		print: function(e) {
			e.preventDefault(), window.print()
		},
		overlayForce: function() {
			vc.CarComparisonHeader.forceClick()
		},
		carDeepLinked: function() {
			vc.CarComparisonSelector.hasDeepLinked = !0
		}
	})
}(),
function() {
	"use strict";
	vc.CarComparisonHeader = Backbone.View.extend({
		tmpl: templates["car-selector-slot"],
		events: {
			"change .js-engine-fallback-select": "selectEngine",
			"click .car-selector-remove": "resetSlot",
			"click .js-car-selector-cta": "showFormSlot"
		},
		initialize: function() {
			this.cars = new vc.CarModel, this.selected = [{
				model: null,
				engine: null
			}, {
				model: null,
				engine: null
			}, {
				model: null,
				engine: null
			}]
		},
		preload: function() {
			var e = this,
				t = 0,
				i = null;
			document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(n, s, a, o) {
				if ("modelid" === s.toLowerCase()) {
					if (!o) return;
					e.selected[t] = {
						model: o
					}
				} else e.selected[t] = {
					model: s,
					engine: o
				};
				e.trigger("car:deeplinked"), i = $(".car-selector-slot-" + (t + 1)), e.showFormSlot({
					target: i,
					deepLink: !0,
					model: e.selected[t]
				}), t++
			})
		},
		fetchCars: function() {
			this.cars.fetch({
				data: $.param({
					sc_site: vc.settings.sc_site
				}),
				success: _.bind(function() {
					this.render(), this.preload(), this.trigger("carData:loaded")
				}, this)
			})
		},
		render: function() {
			return this.$el.html(this.tmpl.render(this.cars.toJSON())), _.each(this.$(".js-engine-dropdown"), _.bind(function(e) {
				this.disableDropdown(e)
			}, this)), _.each(this.$(".dropdown-wrapper"), function(e) {
				new vc.Dropdown({
					el: e
				})
			}), this
		},
		showFormSlot: function(e) {
			e.preventDefault && e.preventDefault();
			var t = $(e.target).closest(".car-selector-slot");
			t.find(".js-car-selector-form").addClass("car-selector-form--visible");
			var i = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10);
			e.deepLink ? this.trigger("car:changed", i, e.model.model) : this.trigger("form:clicked", i)
		},
		hideFormSlot: function(e) {
			e.preventDefault && e.preventDefault();
			var t = $(e.target).closest(".car-selector-slot");
			t.find(".js-car-selector-form").removeClass("car-selector-form--visible")
		},
		selectCar: function(e, t) {
			var i = $(".car-selector-slot-" + (e + 1)),
				n = t,
				s = i.find(".js-engine-dropdown"),
				a = i.find(".js-car-selector-picture"),
				o = i.find(".js-car-selector-picture-side"),
				r = i.find(".js-car-selector-name"),
				l = i.find(".js-engine-selector-name"),
				c = i.find(".car-selector-explore a"),
				d = i.find(".car-selector-build a"),
				h = this.getSelectedCar(n),
				b = parseInt(i.closest(".car-selector-slot").attr("data-slot"), 10);
			a.attr({
				src: h.CarImage
			}).removeClass("car-selector-picture--placeholder"), o.attr({
				src: h.CarImageHover
			}).removeClass("car-selector-picture-side--placeholder"), i.find(".js-car-selector-form").removeClass("car-selector-form--pristine"), "" !== h.ModelNameCore ? "" !== h.ModelNamePrefix ? (r.html("<small>" + h.ModelNamePrefix + "</small><h3>" + h.ModelNameCore + "</h3>"), r.removeClass("small-after")) : (r.html("<h3>" + h.ModelNameCore + "</h3><small>" + h.ModelNameSuffix + "</small>"), r.addClass("small-after")) : r.html("<h3>" + h.ModelDisplayName + "</h3>"), this.selected[b].model = h.ModelId, h.CarBuilderUrl ? d.attr("href", h.CarBuilderUrl).show() : d.hide(), h.PdpUrl ? c.attr("href", h.PdpUrl).show() : c.hide(), h.Variants.length > 0 ? (this.setDropdownData(h, "VariantId", "DisplayName", s), this.selectVariantDropdown(s, this.selected[b].engine ? this.selected[b].engine : h.Variants[0].VariantId), this.enableDropdown(s)) : (l.text(""), this.emptyDropdown(s), this.disableDropdown(s))
		},
		getSelectedCar: function(e) {
			if (1 === this.cars.attributes.AllCars.length) return _.findWhere(this.cars.attributes.AllCars[0].Cars, {
				ModelId: e
			});
			var t;
			return _.each(this.cars.attributes.AllCars, function(i) {
				_.each(i.Cars, function(i) {
					i.ModelId === e && (t = i)
				})
			}), t
		},
		selectEngine: function(e) {
			var t = $(e.target).closest(".car-selector-slot"),
				i = t.find(".js-engine-selector-name"),
				n = $(e.target).val() || t.find(".js-engine-fallback-select option:selected").val(),
				s = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10),
				a = t.find(".js-engine-fallback-select option:selected").text();
			i.text(a), this.selected[s].engine = n, this.trigger("engine:changed", {
				slot: s,
				engine: n,
				model: this.selected[s].model
			})
		},
		forceClearSlot: function(e) {
			$(".car-selector-slot-" + (e + 1)).find(".car-selector-remove").click()
		},
		resetSlot: function(e) {
			e.preventDefault();
			var t = $(e.target).closest(".car-selector-slot"),
				i = t.find(".js-car-selector-picture-side"),
				n = t.find(".js-engine-selector-name"),
				s = t.find(".js-car-selector-name"),
				a = t.find(".car-selector-build a"),
				o = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10);
			this.resetDropdown(t.find(".js-car-dropdown")), this.emptyDropdown(t.find(".js-engine-dropdown")), this.disableDropdown(t.find(".js-engine-dropdown")), this.resetSelectedCar(o), i.attr({
				src: ""
			}), n.text(""), s.text(""), a.attr("href", "#"), this.trigger("slot:reset", o), t.find(".js-car-selector-form").addClass("car-selector-form--pristine"), this.hideFormSlot(e)
		},
		setDropdownData: function(e, t, i, n) {
			var s = $(n).children(".dropdown"),
				a = $(n).children(".dropdown-fallback");
			this.emptyDropdown(n);
			for (var o = e.Variants, r = null, l = null, c = 0; c < o.length; c++) r = $('<li subject="' + o[c][t] + '"><a href="#" data-dropdown="' + o[c][t] + '">' + o[c][i] + "</a></li>"), l = $('<option value="' + o[c][t] + '">' + o[c][i] + "</option>"), s.append(r), a.append(l)
		},
		isAlreadySelected: function(e, t) {
			var i = !1,
				n = 0;
			do i = this.selected[n].model === e && this.selected[n].engine === t, n++;
			while (!i && n < this.selected.length);
			return i
		},
		emptyDropdown: function(e) {
			var t = $(e).children(".dropdown"),
				i = $(e).children(".dropdown-fallback"),
				n = $(e).find(".dropdown-active-item"),
				s = i.attr("data-defaultLabel");
			t.empty(), i.empty(), n.data("dropdownActive", s), n.html(s), i.append($("<option></option>").val(s).html(s).attr({
				selected: "selected",
				disabled: "disabled"
			}))
		},
		restoreDefaultOption: function(e) {
			var t = $(e).children(".dropdown-fallback"),
				i = t.attr("data-defaultLabel"),
				n = t.find('option[value="' + i + '"]');
			n.length || t.prepend($("<option></option>").val(i).html(i).attr({
				disabled: "disabled"
			}))
		},
		resetDropdown: function(e) {
			var t = $(e).children(".dropdown-fallback"),
				i = $(e).find(".dropdown-active-item"),
				n = t.attr("data-defaultLabel");
			i.data("dropdownActive", n), i.html(n), t.find("option[selected=selected]").removeProp("selected").removeAttr("selected");
			var s = t.find("option[data-defaultLabel]");
			s.length ? s.prop("selected", !0).attr("selected", "selected") : t.find("option:first").prop("selected", !0).attr("selected", "selected")
		},
		selectVariantDropdown: function(e, t) {
			this.selectDropdownItem(e, t), this.selectEngine({
				target: e
			})
		},
		selectModelDropdown: function(e, t) {
			this.selectDropdownItem(e, t), this.selectCar({
				target: e
			})
		},
		selectDropdownItem: function(e, t) {
			var i = $(e).children(".dropdown"),
				n = i.find('[data-dropdown="' + t + '"]').parent().index(),
				s = $(e).children(".dropdown-fallback"),
				a = $(e).find(".dropdown-active-item"),
				o = i.find("li").eq(n).find("a").text();
			a.text(o), s.find("option[selected=selected]").remove(), s.find("option").eq(n).prop("selected", !0).attr({
				selected: "selected"
			})
		},
		disableDropdown: function(e) {
			var t = $(e).closest(".dropdown-wrapper"),
				i = $(e).children(".dropdown-fallback");
			t.addClass("disabled"), i.prop("disabled", "disabled")
		},
		enableDropdown: function(e) {
			var t = $(e).closest(".dropdown-wrapper"),
				i = $(e).children(".dropdown-fallback");
			t.removeClass("disabled"), i.prop("disabled", !1)
		},
		scrollToTop: function() {
			var e = $(".js-car-comparison-header").position().top,
				t = $(".car-comparision-header-placeholder");
			t.length && (e = t.position().top), $("html, body").animate({
				scrollTop: e - 1
			}, 400)
		},
		resetSelectedCar: function(e) {
			$('li[subject="' + this.selected[e].engine + '"]').show(), $('option[value="' + this.selected[e].engine + '"]').show(), this.selected[e] = {
				model: null,
				engine: null
			}
		},
		setSelected: function(e, t, i) {
			this.selected[e] = {
				model: t,
				engine: i
			}
		},
		forceClick: function() {
			$(".car-selector-slot-1").children(".js-car-selector-cta").click()
		}
	})
}(),
function() {
	"use strict";
	vc.CarComparisonData = Backbone.View.extend({
		highlights: templates["car-comparison-highlights"],
		specs: templates["car-comparison-specs"],
		ctas: templates["car-comparison-cta"],
		events: {
			"click .lightbox": "showLightbox"
		},
		initialize: function() {
			this.carOverlayModel = new vc.CarOverlayModel, this.getLightboxData()
		},
		getLightboxData: function() {
			this.carOverlayModel.fetch({
				data: $.param({
					sc_site: vc.settings.sc_site
				}),
				success: _.bind(function() {
					this.render()
				}, this)
			})
		},
		render: function(e) {
			var t = this.getFirstUsedSlotIndex(e);
			if (t !== !1) {
				var i = {
					Hightlights: this.buildHighlightObject(e, t),
					Specs: this.buildSpecsObject(e, t)
				};
				this.$el.empty();
				var n = "";
				null !== i.Hightlights && (n += this.highlights.render({
					data: i.Hightlights
				})), n += this.specs.render({
					data: i.Specs
				}), n += this.ctas.render({
					translate: vc.dictionary.CarComparison
				}), this.$el.html(n), _.each(this.$el.find("tr.header"), function(e) {
					"" === $(e).data("lightbox-id") ? $(e).addClass("suppress-info") : "" === this.carOverlayModel.attributes[$(e).data("lightbox-id")] ? $(e).addClass("suppress-info") : $(e).removeClass("suppress-info")
				}, this), this.$el.stop().fadeTo("fast", 1), _.each(this.$(".standard-accordion"), function(e) {
					$(e).find("li:first-child").addClass("expanded").find(".accordion-arrow").addClass("icon-angle-up").removeClass("icon-angle-down");
					var t = new vc.Accordion({
						el: e
					});
					t.render()
				})
			} else $(this.$el).fadeOut(function() {
				$(this).empty()
			});
			return this
		},
		showLightbox: function(e) {
			e.preventDefault();
			var t = $(e.target),
				i = t.parents("tr").data("lightbox-id"),
				n = t.parents("tr").data("lightbox-title");
			this.carOverlayModel.set("title", n).set("htmlContent", this.carOverlayModel.attributes[i]);
			var s = new vc.FeatureOptions.Overlay({
				model: this.carOverlayModel
			});
			vc.app.$mask.append(s.render().el)
		},
		getFirstUsedSlotIndex: function(e) {
			var t = null,
				i = 0;
			if (e) do _.isEmpty(e[i]) ? i++ : t = !0;
			while (!t && i < e.length);
			return !e || i >= e.length ? !1 : i
		},
		buildHighlightObject: function(e, t) {
			if (null !== e[t].Highlights) {
				for (var i = e[t].Highlights, n = {
					Label: i.Title,
					Items: []
				}, s = {}, a = 0, o = i.Items.length; o > a; a++) {
					s = {
						Label: i.Items[a].Label,
						Description: i.Items[a].Description,
						HasSubItems: null !== i.Items[a].SubItems,
						SubItems: [],
						Values: []
					};
					var r = 0;
					if (s.HasSubItems) for (var l = 0, c = this.getHighlightsMaxSubItems(e, a); c > l; l++) for (s.SubItems[l] = [], r = 0; 3 > r; r++) s.SubItems[l].push(_.isEmpty(e[r]) || _.isEmpty(e[r].Highlights.Items[a].SubItems[l]) ? {
						Label: "",
						Value: ""
					} : e[r].Highlights.Items[a].SubItems[l]);
					else for (r = 0; 3 > r; r++) s.Values.push(_.isEmpty(e[r]) ? "" : e[r].Highlights.Items[a].Value);
					n.Items.push(s)
				}
				return n
			}
			return null
		},
		getHighlightsMaxSubItems: function(e, t) {
			for (var i = [], n = 0, s = e.length; s > n; n++) e[n] && e[n].Highlights && e[n].Highlights.Items && e[n].Highlights.Items[t] && e[n].Highlights.Items[t].SubItems && i.push(e[n].Highlights.Items[t].SubItems.length);
			return i.length ? _.max(i) : 0
		},
		getSpecsMaxSubItems: function(e, t, i) {
			for (var n = [], s = 0, a = e.length; a > s; s++) e[s] && e[s].Specs && e[s].Specs.Categories && e[s].Specs.Categories[t] && e[s].Specs.Categories[t].Items && e[s].Specs.Categories[t].Items[i] && e[s].Specs.Categories[t].Items[i].SubItems && n.push(e[s].Specs.Categories[t].Items[i].SubItems.length);
			return n.length ? _.max(n) : 0
		},
		buildSpecsObject: function(e, t) {
			var i = e[t].Specs,
				n = {}, s = {}, a = {}, o = {
					Title: i.Title,
					cats: []
				};
			if (!e[t]) return {};
			for (var r = 0, l = i.Categories.length; l > r; r++) {
				n = {
					CategoryId: i.Categories[r].CategoryId,
					CategoryName: i.Categories[r].CategoryName,
					Items: []
				};
				for (var c = 0, d = i.Categories[r].Items.length; d > c; c++) {
					s = {
						FieldName: i.Categories[r].Items[c].FieldName,
						Label: i.Categories[r].Items[c].Label,
						HasSubItems: null !== i.Categories[r].Items[c].SubItems,
						SubItems: [],
						Values: []
					};
					var h = 0;
					if (s.HasSubItems) for (var b = 0, p = this.getSpecsMaxSubItems(e, r, c); p > b; b++) {
						for (a = {
							Labels: [],
							ItemId: i.Categories[r].Items[c].SubItems[b] ? i.Categories[r].Items[c].SubItems[b].ItemId : "",
							Values: []
						}, h = 0; 3 > h; h++) a.Labels.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[b]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[b].Label), a.Values.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[b]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[b].Value);
						s.SubItems.push(a)
					} else for (h = 0; 3 > h; h++) s.Values.push(_.isEmpty(e[h]) ? "" : e[h].Specs.Categories[r].Items[c].Value);
					n.Items.push(s)
				}
				o.cats.push(n)
			}
			return o
		}
	})
}(),
function() {
	"use strict";
	vc.CarComparisonSelector = Backbone.View.extend({
		groupTemplate: templates["car-comparison-selector-group"],
		itemTemplate: templates["car-comparison-selector-item"],
		events: {
			"click .car-selector-overlay-item": "carSelected"
		},
		currentSlotNumber: null,
		hasClicked: !1,
		hasClickedTimer: null,
		hasDeepLinked: !1,
		initialize: function() {
			this.$scrim = $(".car-selector-overlay-scrim")
		},
		render: function(e) {
			this.carData = e, this.setupGroups();
			var t = this;
			this.hasClickedTimer = _.delay(this.onClickedTimer, 2e3, t)
		},
		setupGroups: function() {
			if (1 === this.carData.length) {
				var e = $(this.groupTemplate.render({
					GroupName: vc.dictionary.CarComparison.AllModels
				}));
				e.addClass("single-group"), _.each(this.carData[0].Cars, function(t, i) {
					"" !== t.ModelNameCore ? "" !== t.ModelNamePrefix ? t.NameType3 = "3" : "" !== t.ModelNameSuffix ? t.NameType4 = "4" : t.NameType2 = "2" : t.NameType1 = "1";
					var n = $(this.itemTemplate.render(t));
					(i + 1) % 4 === 0 && 0 !== i && n.addClass("last"), e.find(".car-selector-overlay-cars").append(n)
				}, this), this.$el.append(e)
			} else _.each(this.carData, function(e) {
				var t = $(this.groupTemplate.render({
					GroupName: e.CarCategoryName
				}));
				t.addClass("multi-group"), _.each(e.Cars, function(e) {
					"" !== e.ModelNameCore ? "" !== e.ModelNamePrefix ? e.NameType3 = "3" : "" !== e.ModelNameSuffix ? e.NameType4 = "4" : e.NameType2 = "2" : e.NameType1 = "1";
					var i = $(this.itemTemplate.render(e));
					t.find(".car-selector-overlay-cars").append(i)
				}, this), this.$el.append(t)
			}, this), this.$el.find(".car-selector-overlay-car-group").last().addClass("last");
			this.$el.find(".car-selector-overlay-car-group").children(".car-selector-overlay-drop-down").on("click", function() {
				$(this).next(".car-selector-overlay-cars").toggleClass("on"), $(this).find(".icon").toggleClass("icon-angle-up icon-angle-down")
			})
		},
		show: function(e) {
			this.hasClicked || (this.hasClicked = !0, clearTimeout(this.hasClickedTimer)), this.currentSlotNumber = e, $(this.$el.parents(".car-selector-overlay")).fadeIn(), this.$scrim.fadeIn()
		},
		closeOverlay: function() {
			this.trigger("overlay:closed", this.currentSlotNumber), $(this.$el.parents(".car-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
		},
		carSelected: function(e) {
			this.trigger("car:changed", this.currentSlotNumber, $(e.target).closest(".car-selector-overlay-item").data("model-id")), $(this.$el.parents(".car-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
		},
		onClickedTimer: function(e) {
			e.hasDeepLinked || e.trigger("overlay:force")
		}
	})
}(),
function() {
	"use strict";
	vc.InlineCarCompare = Backbone.View.extend({
		initialize: function() {
			this.models = $(".inline-car-compare-models"), this.selected({
				target: $("select:first", this.$el)
			})
		},
		events: {
			"change .model-select": "selectImage",
			"change .dropdown-fallback": "selected"
		},
		selectImage: function(e) {
			var t = $("option:selected", e.target).attr("data-image"),
				i = $(e.target).attr("data-slot");
			t && $("li[data-slot=" + i + "] img", this.models).attr("src", t).removeClass("placeholder")
		},
		selected: function(e) {
			var t = $(e.target),
				i = parseInt(t.attr("data-slot"), 10),
				n = (i + 1) % 2,
				s = $(".dropdown[data-slot=" + n + "]", this.$el),
				a = $("select[data-slot=" + n + "]", this.$el);
			s.find("li").show(), s.find('li[subject="' + t.val() + '"]').hide(), a.find("option").attr("disabled", null).removeProp("disabled"), a.find('option[value="' + t.val() + '"]').attr("disabled", "disabled").prop("disabled", !0)
		}
	})
}(),
function() {
	"use strict";
	vc.Interactive = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "halfVisible", "enteredViewport", "leftViewport", "windowScrolled", "windowResized"), this.spyScrollOffset = 190, this.$el.hasClass("media-stream") && this.addSpyListeners(this.$el.find(".items > ul > li")), this.listenTo(vc.app, "resize", this.windowResized), this.fixedHero()
		},
		events: {
			"scroll-spy:half-mark": "halfVisible",
			"scroll-spy:enter-viewport": "enteredViewport",
			"scroll-spy:leave-viewport": "leftViewport"
		},
		fixedHero: function() {
			this.$el.hasClass("hero-fixed") && "extra-large" === vc.app.currentDevice.name ? (this.$hero = this.$el.find("> div"), this.$heroContent = $(".hero-content", this.$el), this.$heroBackground = $(".hero-background", this.$el), this.heroHeight = this.$hero.height(), this.cssTransforms3D = $("html").hasClass("csstransforms3d")) : this.$hero = null
		},
		halfVisible: function(e) {},
		enteredViewport: function(e) {
			$(e.target).addClass("enterInteractive"), this.$hero && (this.windowScrolled(), this.listenTo(vc.app, "app:scrolled", this.windowScrolled))
		},
		leftViewport: function() {
			this.$hero && vc.app.$window.off("scroll.hero")
		},
		windowScrolled: function() {
			if (this.heroHeight) {
				var e = vc.app.$window.scrollTop(),
					t = 1 - e / this.heroHeight;
				if (!(t > 1 || 0 > t)) {
					this.$hero.css({
						opacity: t,
						filter: "alpha(opacity=" + 100 * t + ")"
					});
					var i = e / 2 * -1,
						n = e / 3 * -1;
					this.cssTransforms3D ? (this.$heroContent.css({
						transform: "translate3D(0, " + i + "px, 0)"
					}), this.$heroBackground.css({
						transform: "translate3D(0, " + n + "px, 0)"
					})) : (this.$heroContent.css({
						top: i + "px"
					}), this.$heroBackground.css({
						top: n + "px"
					}))
				}
			}
		},
		windowResized: function() {
			this.fixedHero()
		},
		render: function() {
			return this.isViewScrolled(), this
		}
	}), vc.mixin(vc.Interactive.prototype, vc.ScrollSpy)
}();
var dealerPicker1;
! function() {
	"use strict";
	vc.DealerPicker = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "search", "getKey", "startSearch", "getDealers", "addOne", "activate", "reinitCollection"), this.collection = new vc.DealerPickerCollection, this.$input = this.$("input[name=dealer-picker-query]"), this.$dealerId = this.$("#dealerId"), this.$vccDealerId = this.$("#vccDealerId"), this.$results = this.$(".dealer-picker-results"), this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "sync", this.synced), this.listenTo(this.collection, "change", this.activate), this.listenTo(this.collection, "error", this.error), this.listenTo(this.collection, "change:active", this.activeDealerChanged), this.checkForPrefill(), this.enableAutocomplete(this.$input), dealerPicker1 = this
		},
		reinitCollection: function() {
			this.collection.reset(), this.collection = new vc.DealerPickerCollection, this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "sync", this.synced), this.listenTo(this.collection, "change", this.activate), this.listenTo(this.collection, "error", this.error), this.listenTo(this.collection, "change:active", this.activeDealerChanged)
		},
		events: {
			"keypress input": "getKey",
			"click button": "startSearch",
			"click .dealer-selected-change": "reset"
		},
		checkForPrefill: function() {
			var e = this.$dealerId.val(),
				t = this.$vccDealerId.val();
			(e || t) && (this.setClassName("dealer-loading dealer-prefill"), e ? this.collection.findDealerById(e) : this.collection.findDealerById(t, "VccDealerId"))
		},
		activeDealerChanged: function() {},
		search: function() {
			var e = this,
				t = this.$input.val(),
				i = new google.maps.Geocoder;
			this.setClassName("dealer-loading"), i.geocode({
				address: t,
				region: vc.settings.marketId
			}, function(t, i) {
				if (i === google.maps.GeocoderStatus.OK) {
					var n = _(t).first();
					n ? (e.collection instanceof vc.DealerPickerCollection || e.reinitCollection(), e.collection.visitorPosition = new google.maps.LatLng(n.geometry.location.lat(), n.geometry.location.lng()), e.collection.searchGeometry = n.geometry, e.getDealers()) : e.setClassName("dealer-badlocation")
				} else e.setClassName(i === google.maps.GeocoderStatus.ZERO_RESULTS ? "dealer-badlocation" : "dealer-error")
			})
		},
		startSearch: function(e) {
			return e.preventDefault(), this.search(), !1
		},
		getKey: function(e) {
			return 13 === e.keyCode ? (this.search(), this.$input.blur(), !1) : void 0
		},
		getDealers: function() {
			this.collection.fetch({
				sort: !0,
				add: !0,
				remove: !0,
				merge: !1,
				cache: !0,
				data: {
					format: "json",
					latitude: this.collection.visitorPosition.lat(),
					longitude: this.collection.visitorPosition.lng(),
					geometry: this.collection.searchGeometry,
					languageId: "'" + (vc.settings.languageId || "sv") + "'",
					marketId: "'" + (vc.settings.marketId || "se") + "'"
				}
			})
		},
		reset: function(e) {
			e.preventDefault(), this.collection.reset(), this.$results.empty(), this.$input.val(""), this.$dealerId.val(""), this.$vccDealerId.val(""), this.setClassName(""), vc.app.trigger("dealer-name-search", !1)
		},
		error: function() {
			this.setClassName("dealer-error")
		},
		setClassName: function(e) {
			var t = ["dealer-loading", "dealer-results", "dealer-selected", "dealer-error", "dealer-noresults", "dealer-badlocation", "dealer-prefill"];
			this.$el.removeClass(t.join(" ")).addClass(e)
		},
		addOne: function(e) {
			var t = e.get("GeoCode");
			e.marker = {
				LatLng: new google.maps.LatLng(t.Latitude, t.Longitude),
				getPosition: function() {
					return this.LatLng
				}
			}, e.view = new vc.DealerPickerItem({
				model: e,
				className: "dealer-picker-item"
			})
		},
		synced: function() {
			this.collection.length > 0 ? (this.collection.sort(), this.render(), 0 == $(".map-container").css("opacity") && ($(".map-container").css("opacity", "1"), $(".map-container").css("zoom", "1"))) : this.setClassName("dealer-noresults")
		},
		activate: function() {
			var e = this.collection.findWhere({
				active: !0
			});
			e && (this.setClassName("dealer-selected"), this.$dealerId.val(e.get("DealerId")), this.$vccDealerId.val(e.get("VccDealerId")))
		},
		render: function() {
			var e = this.collection,
				t = this.$results;
			e.length && (this.setClassName("dealer-results"), t.html("&nbsp;"), e.each(function(e) {
				(null == e.view || void 0 == e.view) && (e.view = new vc.DealerPickerItem({
					model: e,
					className: "dealer-picker-item"
				})), t.append(e.view.render().el)
			}), 1 === e.length && e.at(0).set("active", !0))
		}
	}), vc.mixin(vc.DealerPicker.prototype, vc.DealerAutocomplete)
}(),
function() {
	"use strict";
	vc.DealerPickerItem = Backbone.View.extend({
		tmpl: templates["dealer-picker-item"],
		initialize: function() {
			_.bindAll(this, "dealerClicked"), this.listenTo(this.model, "remove", this.remove), this.listenTo(this.model, "change", this.dealerChanged)
		},
		events: {
			"click ": "dealerClicked"
		},
		dealerChanged: function(e) {
			var t = e.changedAttributes();
			"active" in t && this.$el.toggleClass("active", t.active)
		},
		dealerClicked: function(e) {
			return "a" === e.target.tagName.toLowerCase() ? !0 : (e.preventDefault(), this.model.activate(), void("undefined" != typeof dealerPicker1 && null != dealerPicker1 && dealerPicker1.activate()))
		},
		render: function() {
			return this.$el.html(this.tmpl.render(this.model.toJSON())), this.delegateEvents(this.events), this.$number = this.$(".dealer-marker span"), this.$distance = this.$(".dealer-distance"), this
		}
	})
}(),
function() {
	"use strict";
	var e = function(e) {
		var t = e.target.value;
		$(window).scrollTop($("#" + t).offset().top)
	};
	vc.Offers = Backbone.View.extend({
		initialize: function() {
			this.collection = new vc.CarouselItemCollection, this.router = new vc.StoryCarouselRouter({
				collection: this.collection
			}), _.bindAll(this, "createItemView", "createDots"), $(".anchor-select select").on("change", e)
		},
		createItemView: function(e, t) {
			var i = $(t),
				n = this.collection.add({
					id: i.attr("id")
				}),
				s = new vc.CarouselItemView({
					el: t,
					model: n
				});
			n.view = s.render(), 0 === e && n.set({
				active: !0
			})
		},
		createDots: function() {
			var e = this,
				t = this.$el.find(".offer-dots");
			this.collection.forEach(function(i) {
				var n = e.collection.indexOf(i),
					s = t.find(".button").eq(n),
					a = new vc.StoryCarouselButton({
						router: e.router,
						model: i,
						el: s
					});
				a.render()
			})
		},
		render: function() {
			var e = this.$el.find(".carousel");
			return e.length && (this.carousel = new vc.Carousel({
				el: this.$el.find(".carousel"),
				collection: this.collection
			}), this.carousel.render(), this.$el.find(".offers-list>li").each(this.createItemView), this.createDots()), this
		}
	})
}(),
function() {
	"use strict";
	var e = {
		el: null,
		contentEl: null,
		dockingElement: null,
		initialize: function(e) {
			this.el = $(e.el), this.contentEl = this.el.find(".sticky-content"), this._isStickyShowOnScroll() && (this.showOnScroll($(window).scrollTop()), this.listenTo(vc.app, "app:scrolled", this.showOnScroll))
		},
		showOnScroll: function(e) {
			this.el.hasClass("sticky-dock") && (this.el.position().top <= $(window).innerHeight() + e ? this.el.addClass("sticky-docked") : this.el.removeClass("sticky-docked")), e > 0 ? this.contentEl.fadeIn() : this.contentEl.fadeOut()
		},
		_isStickyToTop: function() {
			return this.contentEl.hasClass("sticky-content--top")
		},
		_isStickyToBottom: function() {
			return this.contentEl.hasClass("sticky-content--bottom")
		},
		_isStickyShowOnScroll: function() {
			return this.contentEl.hasClass("sticky-content--onscroll")
		}
	};
	vc.StickyElement = Backbone.View.extend(e)
}(),
function() {
	"use strict";
	vc.CorporateComm = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "switchTabs", "tabsresize", "singleItem", "updateSelectedItem", "goToItem", "triggerClickItem"), this.par = $(".tabsContainer").parent(), this.currentTab = !1, this.years = $(".tabsContainer").detach(), this.$scrollNav = $(".scroll-nav"), this.$scrollNavItems = this.$scrollNav.find("a"), this.$selectedItem = this.$scrollNavItems.filter(".selected"), this.selectedItemPos = this.$scrollNavItems.index(this.$selectedItem), this.switchTabs(0), this.tabsresize(), this.render()
		},
		switchTabs: function(e) {
			this.currentTab && $(this.currentTab).detach(), this.par.append(this.years[e]), this.currentTab = this.years[e], $(".investor-relations tr.Blank td").append("&nbsp;")
		},
		tabsresize: function() {
			var e = $("#corporateTabs #tabs li"),
				t = e.length,
				i = 101 / t - 1 + "%";
			t > 1 ? ($("#corporateTabs #tabs li").css("width", i), $("#corporateTabs #tabs li a").click(function() {
				var e = $(this).attr("id");
				$(this).hasClass("inactive") && ($("#corporateTabs #tabs li a").addClass("inactive"), $(this).removeClass("inactive"), $("#corporateTabs .container").hide(), $("#corporateTabs #" + e + "Content").fadeIn("slow"))
			})) : $("#corporateTabs #tabs").hide()
		},
		singleItem: function(e) {
			var t = e.page.size;
			return 1 === t ? !0 : !1
		},
		updateSelectedItem: function() {
			this.$selectedItem = this.$scrollNavItems.filter(".selected"), this.selectedItemPos = this.$scrollNavItems.index(this.$selectedItem)
		},
		goToItem: function(e) {
			this.$scrollNav.trigger("to.owl.carousel", [e, 100, !0])
		},
		triggerClickItem: function(e) {
			if (this.singleItem(e)) {
				var t = e.item.index;
				this.$scrollNavItems.eq(t).trigger("click")
			}
		},
		events: {
			"changed.owl.carousel": function(e) {
				this.triggerClickItem(e)
			},
			"resize.owl.carousel": function(e) {
				this.updateSelectedItem(e)
			},
			"resized.owl.carousel": function(e) {
				this.singleItem(e) && this.goToItem(this.selectedItemPos)
			},
			"click .scroll-nav a": function(e) {
				var t = $(e.currentTarget);
				this.$scrollNavItems.removeClass("selected"), t.addClass("selected");
				var i = this.$scrollNavItems.index(e.currentTarget);
				return this.switchTabs(i), this.tabsresize(), !1
			}
		},
		render: function() {
			$(".js-financial-results").owlCarousel({
				nav: !0,
				stagePadding: 60,
				startPosition: this.selectedItemPos,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: this.$scrollNavItems.length >= 4 ? 4 : this.$scrollNavItems.length
					},
					1200: {
						items: this.$scrollNavItems.length >= 7 ? 7 : this.$scrollNavItems.length
					}
				}
			}), $(".js-key-financial-data").owlCarousel({
				startPosition: this.selectedItemPos,
				responsive: {
					0: {
						items: 1,
						nav: !0,
						stagePadding: 60
					},
					480: {
						items: this.$scrollNavItems.length >= 2 ? 2 : this.$scrollNavItems.length,
						nav: this.$scrollNavItems.length > 2 ? !0 : !1,
						stagePadding: this.$scrollNavItems.length > 2 ? 60 : !1
					},
					1200: {
						items: this.$scrollNavItems.length >= 4 ? 4 : this.$scrollNavItems.length,
						nav: this.$scrollNavItems.length > 4 ? !0 : !1,
						stagePadding: this.$scrollNavItems.length > 4 ? 60 : !1
					}
				}
			}), $(".scroll-nav ul li:first-child a").addClass("selected")
		}
	})
}(),
function() {
	"use strict";
	vc.ManualsDropdown = vc.Dropdown.extend({
		initialize: function() {
			vc.Dropdown.prototype.initialize.apply(this, arguments), _.bindAll(this, "fetchData", "setDropdownData", "clickedYear", "clickedModel", "resetDropdown"), this.model = new vc.ManualsItem
		},
		events: {
			"click .manuals-dropdown-year .dropdown li": "clickedYear",
			"click .manuals-dropdown-model .dropdown li": "clickedModel",
			"change .manuals-dropdown-year .dropdown-fallback": "clickedYear",
			"change .manuals-dropdown-model .dropdown-fallback": "clickedModel"
		},
		fetchData: function(e, t) {
			e = e || null, t = t || null;
			var i = "/data/owners-manuals/listmanuals",
				n = i + (e ? "?year=" + e : "") + (e && t ? "&model=" + t : "");
			this.model.fetch({
				url: n,
				async: !1
			})
		},
		setDropdownData: function(e, t, i) {
			var n = $(i).children(".dropdown"),
				s = $(i).children(".dropdown-fallback");
			this.resetDropdown(i);
			for (var a = 0; a < e[t].length; a++) n.append('<li><a href="#" data-dropdown="' + e[t][a] + '">' + e[t][a] + "</a></li>"), s.append('<option value="' + e[t][a] + '">' + e[t][a] + "</option>")
		},
		resetDropdown: function(e) {
			var t = $(e).children(".dropdown"),
				i = $(e).children(".dropdown-fallback"),
				n = $(e).find(".dropdown-active-item"),
				s = i.data("defaultLabel");
			t.empty(), i.empty(), n.data("dropdownActive", s), n.html(s), i.append($("<option></option>").val(s).html(s).attr({
				selected: "selected",
				disabled: "disabled"
			}))
		},
		setResultsList: function(e) {
			var t = $("#volvo").find(".manuals-wrapper").find(".results-list-wrapper"),
				i = t.find(".results-list");
			i.empty();
			for (var n = 0; n < e.Manuals.length; n++) i.append('<li class="result-item"><div class="result-item-info"><div class="year">' + e.Manuals[n].year + '</div><div class="description">' + e.Manuals[n].desc + '</div></div><div class="result-item-button"><a class="button button-small button-opaque" target="_blank" href="' + e.Manuals[n].url + '">Download</a></div></li>');
			t.show()
		},
		clickedYear: function() {
			var e = this.$el.find(".manuals-dropdown-year .dropdown-fallback option:selected").last().text();
			this.fetchData(e), this.setDropdownData(this.model.getModels(), "Models", this.$el.children(".manuals-dropdown-model"))
		},
		clickedModel: function() {
			var e = this.$el.find(".manuals-dropdown-year .dropdown-fallback option:selected").last().text(),
				t = this.$el.find(".manuals-dropdown-model .dropdown-fallback option:selected").last().text();
			this.fetchData(e, t), this.setResultsList(this.model.getManuals())
		}
	})
}(),
function() {
	"use strict";
	vc.ManualsDropdownItem = vc.ManualsDropdown.extend({
		initialize: function() {
			vc.ManualsDropdown.prototype.initialize.apply(this, arguments), this.$el.hasClass("manuals-dropdown-year") && (this.fetchData(), this.setDropdownData(this.model.getYears(), "Years", this.$el)), this.$el.hasClass("manuals-dropdown-model")
		},
		events: {}
	})
}(),
function() {
	"use strict";
	vc.Chart = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "setOptions", "hexToRgb", "fetchData", "createChart", "scrolledIntoView", "select", "createChart");
			var e = this;
			this.model = new vc.ChartItem, this.listenTo(this.model, "sync", this.createChart), this.listenTo(this.model, "error", this.dataError), this.$el.parents(".charts-container").bind("visible", function() {
				e.createChart(), e.delegateEvents()
			}), this.canvas = this.$el.find("canvas"), this.setOptions(), this.fetchData()
		},
		events: {
			"click canvas": "select",
			"mousemove canvas": "select",
			"mouseout canvas": "select",
			"scroll-spy:half-mark": "scrolledIntoView"
		},
		setOptions: function() {
			this.commonOptions = {
				responsive: !0,
				showTooltips: !1
			}
		},
		fetchData: function() {
			this.url = this.$el.data("chart-url"), this.model.fetch({
				url: this.url
			})
		},
		scrolledIntoView: function() {
			this.createChart()
		},
		createChart: function() {},
		dataError: function() {},
		hexToRgb: function(e) {
			e = e.replace(/^#/, "");
			var t = parseInt(e, 16),
				i = t >> 16 & 255,
				n = t >> 8 & 255,
				s = 255 & t;
			return [i, n, s]
		},
		select: function() {},
		render: function() {
			this.isViewScrolled()
		}
	}), vc.mixin(vc.Chart.prototype, vc.ScrollSpy)
}(),
function() {
	"use strict";
	vc.BarChart = vc.Chart.extend({
		initialize: function() {
			vc.Chart.prototype.initialize.apply(this, arguments), this.unit = this.$el.data("chart-unit") || ""
		},
		setOptions: function() {
			vc.Chart.prototype.setOptions.apply(this, arguments), this.chartOptions = _.extend({}, this.commonOptions, {
				scaleShowGridLines: !1,
				showScale: !0,
				scaleLineColor: "rgba(0, 0, 0, 0)",
				scaleGridLineWidth: 0,
				scaleShowLabels: !1,
				scaleFontColor: "rgba(255, 255, 255, .5)",
				scaleSteps: 0,
				barShowStroke: !1,
				barValueSpacing: 5
			}), this.fillColor = "rgba(255, 255, 255, 1)", this.fillColorUnselected = "rgba(255, 255, 255, .5)", this.style = "Bar"
		},
		createChart: function() {
			var e = this.model.get("data");
			this.$el.is(":visible") && !this.chart && e && this.spyVisible && (e.datasets[0].fillColor = this.fillColor, this.ctx = this.canvas.get(0).getContext("2d"), this.chart = new Chart(this.ctx)[this.style](e, this.chartOptions))
		},
		select: function(e) {
			var t = this,
				i = new Date;
			this.selectDelayHash = i;
			var n = this.chart.getBarsAtEvent(e),
				s = this.model.get("data"),
				a = this.fillColor,
				o = this.fillColorUnselected;
			("mousemove" !== e.type || n[0] !== this.selected) && (n && n.length && s && s.datasets[0] && s.datasets[0].dataLocalized && n[0] !== this.selected ? (n = this.selected = n[0], n.fillColor = a, this.$el.find("var").html(s.datasets[0].dataLocalized[n.index] + " " + this.unit).addClass("value-visible"), this.chart.eachBars(function(e) {
				e !== n && (e.fillColor = o)
			}), this.chart.update()) : setTimeout(function() {
				t.selectDelayHash === i && (t.chart.eachBars(function(e) {
					e.fillColor = a
				}), t.$el.find("var").removeClass("value-visible").html("&nbsp;"), t.selected = null, t.chart.update())
			}, 100))
		}
	})
}(),
function() {
	"use strict";
	vc.DoughnutChart = vc.Chart.extend({
		initialize: function() {
			vc.Chart.prototype.initialize.apply(this, arguments), _.bindAll(this, "setColors", "createTable", "selectSegment", "unselectSegment")
		},
		setOptions: function() {
			vc.Chart.prototype.setOptions.apply(this, arguments), this.chartOptions = _.extend({}, this.commonOptions, {
				animationEasing: "easeOutQuad",
				segmentShowStroke: !1,
				percentageInnerCutout: 70,
				animationSteps: 50
			}), this.colorSettings = {
				startColor: "#1b597f",
				endColor: "#dee6ed",
				highlightColor: "#1b597f",
				fillAlphaUnselected: ".4",
				fillAlphaSelected: "1"
			}, this.style = "Doughnut"
		},
		createChart: function() {
			var e = this.model.get("data");
			!this.chart && e && this.spyVisible() && (this.setColors(e, this.colorSettings.startColor, this.colorSettings.endColor, this.colorSettings.highlightColor), this.ctx = this.canvas.get(0).getContext("2d"), this.chart = new Chart(this.ctx)[this.style](e, this.chartOptions), this.setOriginColors(), this.createTable(e), this.setValueMode(e))
		},
		setValueMode: function(e) {
			var t = _.any(e, function(e) {
				return e.originalValue && 0 !== e.originalValue
			});
			t === !0 && this.$el.addClass("is-with-original-value")
		},
		setOriginColors: function() {
			Chart.helpers.each(this.chart.segments, function(e) {
				e.originColor = e.fillColor
			})
		},
		select: function(e) {
			var t = this.chart.getSegmentsAtEvent(e),
				i = t[0];
			("mousemove" !== e.type || i !== this.previouslySelected) && (t && t.length && i !== this.previouslySelected ? (this.highlight(t[0]), this.previouslySelected = t[0]) : (this.resetHighlight(), this.previouslySelected = null))
		},
		highlight: function(e) {
			var t = this;
			this.highlightLegend(e), Chart.helpers.each(this.chart.segments, function(i) {
				i === e ? i.fillColor = i.highlightColor : (i.fillColor = i.originColor, t.setSegmentAlpha(i, .2))
			}), this.chart.update()
		},
		resetHighlight: function() {
			Chart.helpers.each(this.chart.segments, function(e) {
				e.fillColor = e.originColor
			}), this.clearHighlightedLegends(), this.chart.update()
		},
		selectSegment: function(e) {
			this.setSegmentAlpha(e, this.colorSettings.fillAlphaSelected)
		},
		unselectSegment: function(e) {
			this.setSegmentAlpha(e, this.colorSettings.fillAlphaUnselected)
		},
		highlightLegend: function(e) {
			this.clearHighlightedLegends(), this.$el.find("li.legend-row").addClass("dimmed");
			var t = this.getLegendRowFromSegment(e);
			t.removeClass("dimmed"), t.addClass("selected")
		},
		getLegendRowFromSegment: function(e) {
			return this.$el.find('li[data-label="' + e.label + '"]')
		},
		clearHighlightedLegends: function() {
			this.$el.find("li.legend-row").removeClass("selected"), this.$el.find("li.legend-row").removeClass("dimmed")
		},
		setSegmentAlpha: function(e, t) {
			var i = e.fillColor.split(",");
			i[3] = t + ")", e.fillColor = i.join(",")
		},
		setColors: function(e, t, i, n) {
			t = this.hexToRgb(t), i = this.hexToRgb(i), n = this.hexToRgb(n);
			for (var s = [], a = 0; 3 > a; a++) s[a] = Math.round((t[a] - i[a]) / _.size(e));
			var o = t;
			_.each(e, function(e) {
				e.color = "rgba(" + o[0] + "," + o[1] + "," + o[2] + ",1)", e.highlight = "rgba(" + n[0] + "," + n[1] + "," + n[2] + ",1)";
				for (var t = 0; 3 > t; t++) o[t] -= s[t]
			})
		},
		createTable: function(e) {
			var t = this,
				i = this.$el.find(".chart-table");
			_.each(e, function(e) {
				var n = $("<li>", {
					"class": "legend-row",
					"data-label": e.label
				}),
					s = $("<span>", {
						"class": "chart-table-1"
					}),
					a = $("<i>", {
						"class": "button button-dot"
					});
				a.css("background-color", e.color), s.append(a), s.append(e.label);
				var o = $("<span>", {
					"class": "chart-table-2"
				});
				e.valueLocalized && e.originalValue && 0 !== e.originalValue && e.originalValueLocalized ? o.html(e.originalValueLocalized + ' <span class="chart-table-percentage">(' + e.valueLocalized + " %)</span>") : e.valueLocalized && o.html(e.valueLocalized + " %"), n.append([s, o]), n.on("mouseover", function() {
					Chart.helpers.each(t.chart.segments, function(i) {
						i.label === e.label && t.highlight(i)
					})
				}), i.on("mouseout", function() {
					t.resetHighlight()
				}), i.append(n)
			})
		}
	})
}(),
function() {
	"use strict";
	vc.BarChartCarousel = Backbone.View.extend({
		initialize: function() {
			this.$navigators = this.$el.find(".carousel-navigators"), this.$leftNavigator = this.$navigators.find(".left-navigator"), this.$rightNavigator = this.$navigators.find(".right-navigator"), this.$indicatorsContainer = this.$navigators.find(".indicators-container"), this.$indicators = this.$navigators.find(".indicators"), this.$list = this.$el.find(".carousel-list"), this.selectedIndex = 0, this.maxSelectedIndex = this.$list.children().length, this.$rightNavigator.on("click", _.bind(this.navigateRight, this)), this.$leftNavigator.on("click", _.bind(this.navigateLeft, this)), this.setListVisibility(), this.initializeIndicators(), this.setActiveIndicator(), this.setNavigatorHeightInRelationToContent(), vc.app.$window.on("resize", _.bind(this.setNavigatorHeightInRelationToContent, this))
		},
		initializeIndicators: function() {
			for (var e = 0; e < this.maxSelectedIndex; e++) {
				var t = $('<li class="indicator" data-index="' + e + '" />');
				t.on("click", _.bind(this.handleIndicatorClick, this)), this.$indicators.append(t)
			}
		},
		handleIndicatorClick: function(e) {
			var t = $(e.currentTarget);
			this.selectedIndex = Number(t.data("index")), this.setActiveIndicator(), this.setListVisibility()
		},
		setNavigatorHeightInRelationToContent: function() {
			var e = this.$navigators.parent().height();
			this.$leftNavigator.css("height", e), this.$rightNavigator.css("height", e), this.$indicatorsContainer.css("top", e + this.$el.offset().top - this.$indicatorsContainer.outerHeight())
		},
		setActiveIndicator: function() {
			var e = this;
			_.each(this.$indicators.children(), function(t, i) {
				t = $(t), i === e.selectedIndex ? (t.addClass("active"), t.children().trigger("visible")) : t.removeClass("active")
			})
		},
		setListVisibility: function() {
			var e = this;
			_.each(this.$list.children(), function(t, i) {
				t = $(t), i === e.selectedIndex ? (t.addClass("visible"), t.children().trigger("visible")) : t.removeClass("visible")
			}), e.setNavigatorHeightInRelationToContent()
		},
		changeSelectedIndex: function(e) {
			this.selectedIndex += e, this.selectedIndex < 0 ? this.selectedIndex = this.maxSelectedIndex - 1 : this.selectedIndex >= this.maxSelectedIndex && (this.selectedIndex = 0)
		},
		navigateLeft: function() {
			this.changeSelectedIndex(-1), this.setListVisibility(), this.setActiveIndicator()
		},
		navigateRight: function() {
			this.changeSelectedIndex(1), this.setListVisibility(), this.setActiveIndicator()
		}
	})
}(),
function(e) {
	"use strict";
	vc.InteractiveVideo = Backbone.View.extend({
		initialize: function() {
			this.model = new vc.InterActiveVideoModel
		},
		render: function() {
			var t = this;
			t.model.fetch({
				success: function(i) {
					var n = document.documentMode && document.documentMode < 10,
						s = JSON.parse("" + e("#" + e("div[id^=iv-dynamic-json-]", t.el)[0].id).html()),
						a = s;
					a.mainMovieSettings = e.extend(s.mainMovieSettings, i.attributes.mainMovieSettings), a.mainMovieSettings.primary = n ? "flash" : "primary";
					for (var o = 0; o < s.hotspots.length; o++) a.hotspots[o] = e.extend(s.hotspots[o], i.attributes.hotspotSettings), a.hotspots[o].video && (a.hotspots[o].videodata.primary = n ? "flash" : "primary", a.hotspots[o].videodata.stagevideo = !1, a.hotspots[o].videodata.aspectratio = i.attributes.mainMovieSettings.aspectratio, a.hotspots[o].videodata.width = i.attributes.mainMovieSettings.width, a.hotspots[o].videodata.skin = i.attributes.mainMovieSettings.skin);
					t.interactivePlayerSetup(a, t.el)
				}
			})
		},
		interactivePlayerSetup: function(t, i) {
			function n(t) {
				v && 0 === f && (f = jwplayer(p).getDuration(), e.each(u, function(e, t) {
					t.begin = f, t.end = f
				})), s(t.position)
			}
			function s(t) {
				for (var i = b.context.id.split("interactive-video-")[1], n = 0; n < u.length; n++) {
					var s = i + "-" + n;
					if (u[n].begin <= t && u[n].end >= t) {
						if (!u[n].show) if (u[n].video) {
							var p = document.createElement("div");
							p.id = "sub-movie-" + s;
							var v, f, m = "sub-movie-" + s,
								g = u[n].width + "%",
								y = u[n].thumbnailText;
							v = c(u[n].gridPosition.column), f = d(u[n].gridPosition.row), C.append(p), e("#" + m).css({
								height: h(u[n].width),
								width: g
							}), e("#" + m).append('<div id="submovie-container-' + s + '" style=display:none;"><div id="video-wrapper-' + s + '" class="video-wrapper-' + s + '"></div></div>'), e("#" + m).append('<a class="video-preview-' + s + '" href="#submovie-container-' + s + '" title="' + y + '"><span class="play-icon"></span><img src="' + u[n].thumbnailSrc + '"><span class="preview-overlay">' + u[n].thumbnailText + "</span></a>"), u[n].show = !0, u[n].videodata.id = "sub-movie-" + s, jwplayer("video-wrapper-" + s).setup(u[n].videodata).onReady(o(m, v, f, "video-wrapper-" + s)), r(".video-preview-", s, n, !1), WURFL.is_mobile && l("video-wrapper-" + s)
						} else {
							var w = document.createElement("a"),
								k = document.createElement("figure"),
								x = document.createElement("figcaption"),
								S = document.createElement("span"),
								I = document.createElement("img");
							w.id = "spot-" + s, w.href = "javascript(void);", w.className = "gallery-popup-" + s, w.style.left = c(u[n].gridPosition.column), w.style.top = d(u[n].gridPosition.row), w.title = u[n].thumbnailText, I.src = u[n].thumbnailSrc, I.alt = u[n].thumbnailText, S.innerHTML = u[n].thumbnailText, x.appendChild(S), k.appendChild(I), k.appendChild(x), w.appendChild(k), e(w).css({
								width: u[n].width + "%",
								height: h(u[n].width)
							}), $.append(w), w.style.opacity = 1, u[n].show = !0, r($.selector + " > a." + w.className, s, n, !0)
						}
					} else u[n].show && (u[n].video ? a(document.getElementById("sub-movie-" + s), s, !0) : a(document.getElementById("spot-" + s), s, !1), u[n].show = !1)
				}
			}
			function a(e, t, i) {
				var n = e;
				i && jwplayer("video-wrapper-" + t).remove(), document.getElementById(n.id).parentNode.removeChild(document.getElementById(n.id))
			}
			function o(t, i, n, s) {
				var a = document.getElementById(t);
				a.style.left = i, a.style.top = n, jwplayer(s).onComplete(function() {
					e.magnificPopup.close()
				})
			}
			function r(t, i, n, s) {
				s ? e(t).magnificPopup({
					items: u[n].galleryItems,
					gallery: {
						enabled: !0,
						tCounter: '<div class="mfp-counter">%curr% / %total%</div>'
					},
					type: "image",
					image: {
						markup: '<div class="mfp-figure"><div class="mfp-title"></div><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-counter"></div></div></div>',
						titleSrc: function() {
							return this.ev[0].title
						},
						verticalFit: !0
					},
					closeOnBgClick: !1,
					closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="icon icon-close"></i></button>',
					callbacks: {
						beforeOpen: function() {
							jwplayer(p).pause(!0)
						},
						open: function() {
							this.bgOverlay.add(this.wrap).prependTo(b), this.wrap.find(".mfp-arrow-left").detach().appendTo(this.wrap.find(".mfp-content")), this.wrap.find(".mfp-arrow-right").detach().appendTo(this.wrap.find(".mfp-content"));
							var t = this;
							e(".mfp-gallery .mfp-content").on("click", ".mfp-close", function() {
								t.close()
							})
						},
						afterClose: function() {
							jwplayer(p).pause(!1)
						}
					}
				}) : e(t + i).magnificPopup({
					type: "inline",
					closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="icon icon-close"></i></button>',
					tClose: "Close (Esc)",
					closeOnBgClick: !1,
					callbacks: {
						beforeOpen: function() {
							jwplayer(p).pause(!0)
						},
						open: function() {
							var t = this.currItem.el[0].hash.split("#submovie-container-")[1];
							e(".mfp-content #submovie-container-" + t).css("display", "block"), this.bgOverlay.add(this.wrap).prependTo(b);
							var n = this;
							e(".mfp-content #submovie-container-" + t).on("click", ".mfp-close", function() {
								n.close()
							}), e(e.magnificPopup.instance.container[0]).find(".mfp-close").after('<div class="mfp-title"></div>'), e(e.magnificPopup.instance.container[0]).find(".mfp-title").html(this.ev[0].title);
							var s = e("#video-wrapper-" + i).parent().innerWidth(),
								a = Math.round(s * (9 / 16));
							jwplayer("video-wrapper-" + i).resize(s, a), jwplayer("video-wrapper-" + i).play(!0)
						},
						afterClose: function() {
							v || jwplayer(p).pause(!1)
						}
					}
				})
			}
			function l(e) {
				jwplayer(e).onDisplayClick(function(e) {
					var t = jwplayer(e.id).getState();
					jwplayer(e.id).play(void 0 === t || "IDLE" === t || "PAUSED" === t ? !0 : !1)
				})
			}
			function c(e) {
				var t = 6.4,
					i = 15.16;
				return t + e * i + "%"
			}
			function d(e) {
				var t = 7.64,
					i = 15.97;
				return t + e * i + "%"
			}
			function h(t) {
				return Math.round(t / 100 * e(window).width() * (9 / 16) + 1) + "px"
			}
			var b = e(".interactive-video-player-container", i),
				p = e("div[id^=main-movie-]", i)[0].id,
				u = [],
				v = t.mainMovieSettings.displaySummary,
				f = 0;
			if (jwplayer(p).setup(t.mainMovieSettings), WURFL.is_mobile && jwplayer(p).onDisplayClick(function(e) {
				var t = jwplayer(e.id).getState();
				jwplayer(e.id).play(void 0 === t || "IDLE" === t || "PAUSED" === t ? !0 : !1)
			}), WURFL.is_mobile && -1 === WURFL.form_factor.indexOf("Tablet")) {
				var m = b,
					g = b.context.id.split("interactive-video-")[1];
				e.each(t.hotspots, function(t, i) {
					if (i.video) {
						var n = g + "-" + t,
							s = e('<div class="sub-movie"><div class="mobile-video-title"></div><div id="video-wrapper-' + n + '"></div></div>');
						m.after(s), m = s, s.find(".mobile-video-title").html(i.thumbnailText), i.videodata.width = "100%", jwplayer("video-wrapper-" + n).setup(i.videodata), jwplayer("video-wrapper-" + n).onDisplayClick(function(e) {
							var t = jwplayer(e.id).getState();
							jwplayer(e.id).play(void 0 === t || "IDLE" === t || "PAUSED" === t ? !0 : !1)
						})
					}
				})
			} else if (v) {
				var y = 0,
					w = 3;
				e.each(t.hotspots, function(e, t) {
					return t.video && (t.gridPosition.column = 4 - 2 * y, t.gridPosition.row = 3, u.push(t), y++, y === w) ? !1 : void 0
				})
			} else e.each(t.hotspots, function(e, t) {
				u.push(t)
			});
			var $ = e(".galleries", i),
				C = e(".videos", i);
			jwplayer(p).onPlay(function() {
				for (var t = 0; t < u.length; t++) e("#" + u[t].id).length > 0 && jwplayer(u[t].id).pause(!0)
			}), jwplayer(p).onTime(n), e(window).resize(function() {
				e("div[id^=sub-movie-], a[id^=spot-]").each(function() {
					var t = 26.48;
					e(this).css({
						height: h(t)
					})
				});
				var t = e(".mfp-content div[id^=video-wrapper-].jwplayer");
				if (t.length > 0) {
					console.log("videoWrappersOnPage: " + t);
					var i = t[0].id,
						n = e("#" + i).parent().innerWidth(),
						s = Math.round(n * (9 / 16));
					jwplayer(i).resize(n, s)
				}
			})
		}
	})
}($),
function() {
	"use strict";
	vc.FeatureOptions = {}
}(),
function() {
	"use strict";
	vc.FeatureOptions.Model = Backbone.Model.extend({
		defaults: {
			title: "",
			htmlContent: ""
		}
	})
}(),
function() {
	"use strict";
	vc.FeatureOptions.Overlay = vc.Overlay.extend({
		className: vc.Overlay.prototype.className + " feature-overlay",
		tmpl: templates["feature-overlay"],
		initialize: function() {
			vc.Overlay.prototype.initialize.apply(this, arguments)
		},
		remove: function() {
			return this.model.set("active", !1), vc.Overlay.prototype.remove.call(this)
		},
		render: function() {
			this.$el.html(this.model ? this.tmpl.render(this.model.toJSON()) : this.tmpl.render());
			var e = this.$el.find(".feature-video-player");
			if (e.length > 0) {
				e.attr("id", e.attr("id") + "-modal");
				var t = e.data("videos").split(","),
					i = '<video id="' + e.attr("id") + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + e.data("poster") + '" controls="controls" class="mediaelement" preload="none">';
				i += '<source type="video/mp4" src="' + t[0] + '" title="480p SD" />', t.length > 1 && (i += '<source type="video/webm" src="' + t[1] + '" title="480p SD" />'), i += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', i += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', i += '<param name="flashvars" value="controls=true&amp;file=' + t[0] + '" />', i += '<img src="' + e.data("poster") + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', i += "</object>", i += "</video>", e.append(i), setTimeout(function() {
					new vc.Video({
						el: e
					})
				}, 100)
			}
			return vc.app.trigger("mask:show"), this
		}
	})
}(),
function() {
	"use strict";
	vc.CarCampaignConfigurator = Backbone.View.extend({
		properties: {
			selectedColorData: void 0,
			versionIndex: void 0,
			selectedDealer: void 0,
			selectedVariantId: void 0,
			jsonData: void 0
		},
		events: {
			"click .campaign-color-selector a": "carColorChanged",
			"click .select-model button": "carVersionChanged",
			"click .no-dealer-selected a": "scrollToDealerLocatorClicked",
			"click .button-back": "backCarouselImage",
			"click .button-next": "nextCarouselImage",
			"click .continue-to-payment": "continueToPaymentClicked"
		},
		initialize: function() {
			_.bindAll(this, "carColorChanged", "initDealerLocator", "windowResized"), $(window).on("resize.app", _.throttle(this.windowResized, 100))
		},
		render: function() {
			var e = this;
			this.$el.find(".campaign-color-selector a").each(function() {
				var t = e.getColorData($(this).attr("data-car-color"));
				t && 0 !== t.quantity || $(this).addClass("out-of-stock")
			});
			var t = e.getDefaultColorData();
			this.properties.selectedColorData = t, t.rally.quantity > 0 ? this.properties.versionIndex = 0 : t.sunset.quantity > 0 && (this.properties.versionIndex = 1), this.configureGui();
			var i = setInterval(function() {
				vc.DealerLocator && vc.DealerLocator.App && !vc.DealerLocator.app && (clearInterval(i), e.initDealerLocator())
			}, 500)
		},
		windowResized: function() {
			this.equalizeVersionBlocks();

		},
		showCarouselForSelectedColor: function() {
			this.$el.find(".story-carousel").each(function() {
				return "visible" === $(this).css("visibility") ? ($(this).css({
					visibility: "hidden"
				}), !1) : void 0
			}), this.$el.find(".story-carousel[data-car-color='" + this.properties.selectedColorData.color + "']").css({
				visibility: "visible"
			})
		},
		carColorChanged: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget);
			if (!t.hasClass("selected") && !t.hasClass("out-of-stock")) {
				this.$el.find(".campaign-color-selector a.selected").removeClass("selected"), t.addClass("selected");
				var i = this.getColorData(t.attr("data-car-color"));
				this.properties.selectedColorData = i, 0 === this.properties.versionIndex && 0 === this.properties.selectedColorData.rally.quantity ? this.properties.versionIndex = 1 : 1 === this.properties.versionIndex && 0 === this.properties.selectedColorData.sunset.quantity && (this.properties.versionIndex = 0), this.configureGui()
			}
		},
		carVersionChanged: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget),
				i = t.parent().parent();
			if (!i.hasClass("il-option-selected") && !t.hasClass("button-disabled")) {
				this.$el.find(".car-version").toggleClass("il-option").toggleClass("il-option-selected");
				var n = this.$el.find(".car-version");
				this.properties.versionIndex = $(n[0]).hasClass("il-option-selected") ? 0 : 1, this.selectVersion(), this.setOrderDetails()
			}
		},
		scrollToDealerLocatorClicked: function(e) {
			e.preventDefault();
			var t = this;
			$("html, body").animate({
				scrollTop: t.$el.find(".dealer-locator-title").offset().top - 90
			}, 500)
		},
		backCarouselImage: function(e) {
			e.preventDefault();
			for (var t = $(e.currentTarget), i = t.closest(".story-carousel").find(".story-dots .button-dot"), n = 0; n < i.length; n++) if ($(i[n]).hasClass("button-active")) {
				0 === n ? $(i[i.length - 1]).click() : $(i[n - 1]).click();
				break
			}
		},
		nextCarouselImage: function(e) {
			e.preventDefault();
			for (var t = $(e.currentTarget), i = t.closest(".story-carousel").find(".story-dots .button-dot"), n = 0; n < i.length; n++) if ($(i[n]).hasClass("button-active")) {
				n === i.length - 1 ? $(i[0]).click() : $(i[n + 1]).click();
				break
			}
		},
		getDefaultColorData: function() {
			var e = null;
			return $.each(this.getData().stock, function() {
				return this.quantity > 0 ? (e = this, !1) : void 0
			}), e
		},
		getColorData: function(e) {
			var t = $.grep(this.getData().stock, function(t) {
				return t.color === e
			});
			return 0 === t.length ? null : t[0]
		},
		i18n: function(e) {
			return this.getData().dictionary[e]
		},
		initDealerLocator: function() {
			var e = this;
			Modernizr.geolocation = !1, vc.app.stopListening(vc.app, "mask:show"), vc.DealerLocator.App.prototype.setHeight = function() {}, vc.DealerLocator.Form.prototype.updateHeight = function() {
				e.$el.find(".dealer-locator-list-scroller").css("padding-top", "0px")
			};
			var t = vc.DealerLocator.Form.prototype.submitSearch;
			vc.DealerLocator.Form.prototype.submitSearch = function(i) {
				t.bind(vc.DealerLocator.app.form)(i), e.setNearBySearchTerm()
			}, vc.DealerLocator.DealerCollection.prototype.fetch = function(t) {
				if (parseInt($(".dealer-locator-map").attr("data-preload"), 10)) {
					$(".map-container").outerWidth(!0) - $(".map-container").outerWidth() >= 0 && (t.data.bottomRightlatitude = -90, t.data.bottomRightlongitude = 180, t.data.topLeftlatitude = 90, t.data.topLeftlongitude = -180);
					var i = this;
					vc.dealerData.findDealersInBox(t).done(function(n) {
						var s = [];
						$.each(n, function() {
							$.inArray(this.DealerId, e.getData().polestarDealers) > -1 && s.push(this)
						}), i.set(s, t), i.trigger("sync", i)
					})
				} else Backbone.Collection.prototype.fetch.call(this, t)
			}, vc.DealerLocator.AccordionItem.prototype.tmpl = templates["car-campaign-dealer-accordion-item"];
			var i = new vc.DealerLocator.Locator,
				n = new vc.DealerLocator.DealerCollection;
			vc.DealerLocator.map.init(), vc.DealerLocator.router = new vc.DealerLocator.Router({
				model: i
			});
			var s = this.$el.find(".car-campaign-dealer-locator").addClass("dealer-locator");
			vc.DealerLocator.app = new vc.DealerLocator.App({
				el: s,
				collection: n,
				model: i
			}).render(), this.listenTo(vc.DealerLocator.app.collection, "change:active", this.activeDealerChanged), this.listenTo(vc.DealerLocator.app.collection, "dealer-name-selected", this.dealerNameSelected)
		},
		setNearBySearchTerm: function() {
			var e = vc.DealerLocator.app.form.$search.val();
			e = e.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e) {
				return e.toUpperCase()
			}), e ? (this.$el.find(".dealer-search-term").text(e), this.$el.find(".dealer-search-term-container").show()) : this.$el.find(".dealer-search-term-container").hide()
		},
		dealerNameSelected: function() {
			this.setNearBySearchTerm()
		},
		activeDealerChanged: function() {
			var e = this;
			if (this.$el.find(".accordion-panel-toggle").removeClass("selected"), this.properties.selectedDealer = vc.DealerLocator.app.collection.findWhere({
				active: !0
			}), this.properties.selectedDealer) {
				var t = this.properties.selectedDealer.get("Name") + ", " + this.properties.selectedDealer.get("City");
				this.$el.find(".no-dealer-selected").hide(), this.$el.find(".selected-dealer").text(t).show(), this.$el.find(".accordion-panel-toggle").each(function() {
					return $(this).attr("data-dealer-id") === e.properties.selectedDealer.get("DealerId") ? ($(this).addClass("selected"), !1) : void 0
				});
				var i = this.$el.find(".form-content h4");
				i.find("span").text(this.properties.selectedDealer.get("Name")), i.removeClass("visibly-hidden")
			} else this.$el.find(".selected-dealer").hide(), this.$el.find(".no-dealer-selected").show(), this.$el.find(".form-content h4").addClass("visibly-hidden");
			this.setOrderDetails()
		},
		configureGui: function() {
			var e = this.properties.selectedColorData;
			this.showCarouselForSelectedColor();
			var t = this.$el.find(".select-model");
			this.configureVersionBlock($(t[0]), e.rally), this.configureVersionBlock($(t[1]), e.sunset), this.selectVersion(), this.equalizeVersionBlocks(), this.setOrderDetails()
		},
		configureVersionBlock: function(e, t) {
			0 === t.quantity ? e.find("button").addClass("button-disabled") : e.find("button").removeClass("button-disabled"), e.find(".version-availability").text(t.availability), e.find(".car-version-price").text(t.total), e.find(".car-color").text(this.properties.selectedColorData.color)
		},
		equalizeVersionBlocks: function() {
			var e = 0;
			this.$el.find(".model-info").height("auto").each(function() {
				$(this).height() > e && (e = $(this).height())
			}).height(e)
		},
		selectVersion: function() {
			var e = this.$el.find(".car-version");
			0 === this.properties.versionIndex ? ($(e[1]).removeClass("il-option-selected").addClass("il-option"), $(e[0]).removeClass("il-option").addClass("il-option-selected"), $(e[0]).find("button").text(this.i18n("selected")), $(e[1]).find("button").text(this.i18n("select"))) : 1 === this.properties.versionIndex && ($(e[0]).removeClass("il-option-selected").addClass("il-option"), $(e[1]).removeClass("il-option").addClass("il-option-selected"), $(e[0]).find("button").text(this.i18n("select")), $(e[1]).find("button").text(this.i18n("selected"))), this.equalizeVersionBlocks()
		},
		setOrderDetails: function() {
			this.$el.find(".car-color").text(this.properties.selectedColorData.color);
			var e = 0 === this.properties.versionIndex ? this.properties.selectedColorData.rally : this.properties.selectedColorData.sunset;
			this.properties.selectedVariantId = e.variantId, this.$el.find(".car-deposit").text(e.deposit), this.$el.find(".car-price").text(e.total);
			var t = this.i18n(0 === this.properties.versionIndex ? "rallyVersion" : "sunsetVersion");
			this.$el.find(".ordered-version").text(t), this.properties.selectedDealer ? (this.$el.find(".car-ready-to-order").text(this.i18n("readyToOrder")), this.$el.find(".continue-to-payment").removeClass("button-disabled")) : (this.$el.find(".car-ready-to-order").text(this.i18n("pickDealer")), this.$el.find(".continue-to-payment").addClass("button-disabled"))
		},
		getData: function() {
			return this.properties.jsonData || (this.properties.jsonData = JSON.parse(this.$el.find(".car-campaign-json-data").val())), this.properties.jsonData
		},
		continueToPaymentClicked: function(e) {
			if (e.preventDefault(), this.properties.selectedDealer) {
				var t = this.createHiddenFieldValues(),
					i = $("#login_form");
				i.find("[name=variantId]").val(t.variantId), i.find("[name=dealerId]").val(t.dealerId), i.trigger("submit")
			}
		},
		createHiddenFieldValues: function() {
			return {
				variantId: this.properties.selectedVariantId,
				dealerId: this.properties.selectedDealer.id
			}
		}
	})
}(),
function() {
	"use strict";
	vc.CarCampaignOrderForm = Backbone.View.extend({
		events: {
			"change #Country": "countryChanged"
		},
		initialize: function() {
			_.bindAll(this, "countryChanged")
		},
		render: function() {},
		countryChanged: function(e) {
			var t = $(e.currentTarget).find("option:selected").val(),
				i = this.$el.find(".country-of-purchase-code").text();
			t !== i ? this.$el.find(".different-country-warning").show() : this.$el.find(".different-country-warning").hide()
		}
	})
}(),
function() {
	"use strict";
	vc.ItemsList = Backbone.View.extend({
		initialize: function() {
			this.isIE8 = $("html").hasClass("lt-ie9"), this.normalizeButtons()
		},
		normalizeButtons: function() {
			var e = this.$el.find("a.button"),
				t = 0,
				i = this;
			this.stopListening(), e.css("min-height", "0px"), setTimeout(function() {
				e.each(function(i) {
					t = Math.max(t, parseInt(e.eq(i).css("height"), 10))
				}), e.css("min-height", t), i.isIE8 || i.listenTo(vc.app, "resize", i.normalizeButtons)
			}, 100)
		}
	})
}(),
function() {
	"use strict";
	vc.SocialSharing = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "shareLink", "shareWeChat"), this.shareUrl = encodeURIComponent(document.location), this.shareTitle = encodeURIComponent(document.title)
		},
		events: {
			"click .social-sharelink": "shareLink"
		},
		shareLink: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget).data();
			if (t.sharelink) if ($(e.currentTarget).children(".icon").hasClass("icon-wechat")) this.shareWeChat(t);
			else {
				var i = t.sharelink.replace("{{url}}", this.shareUrl).replace("{{title}}", this.shareTitle).replace("{{subject}}", t.sharesubject);
				window.open(i, "_blank", "toolbar=0,location=0,menubar=0,height=500,width=500")
			}
		},
		shareWeChat: function() {
			"undefined" == typeof WeixinJSBridge || WeixinJSBridge.invoke("shareTimeline", {
				title: this.shareTitle,
				link: this.shareUrl
			})
		}
	})
}(),
function() {
	"use strict";
	vc.FindYourVolvoOverlay = vc.Overlay.extend({
		className: vc.Overlay.prototype.className + " find-your-volvo-overlay",
		tmpl: templates["fyv-overlay"],
		initialize: function() {
			vc.Overlay.prototype.initialize.apply(this, arguments)
		},
		render: function() {
			return this.$el.html(this.model ? this.tmpl.render({
				data: this.model.attributes.model
			}) : this.tmpl.render({
				data: "Feature load error. Sorry."
			})), vc.app.trigger("mask:show"), this
		}
	})
}(),
function() {
	"use strict";
	vc.Footer = Backbone.View.extend({
		initialize: function() {
			this.listenTo(vc.app, "device:changed", this.deviceChanged)
		},
		events: function() {
			return "small" !== vc.app.currentDevice.name ? {} : {
				"change .select": "linkGroupNavigate"
			}
		},
		deviceChanged: function() {
			this.undelegateEvents(), this.delegateEvents()
		},
		linkGroupNavigate: function(e) {
			e.preventDefault();
			var t = $(e.currentTarget),
				i = t.val();
			i && (document.location = i)
		}
	})
}(),
function() {
	"use strict";
	vc.TablularView = Backbone.View.extend({
		columnsSize: 0,
		initialize: function() {
			var e = this;
			this.parseRows(), this.columnsSize = this.$("thead > tr > th").length, this.adjustLayout(), $(window).on("resize", function() {
				e.resizedWindow()
			})
		},
		injectColumnHeads: function(e, t) {
			var i = "",
				n = this;
			t.eq(0).append('<i class="icon icon-angle-up"></i>'), t.eq(0).addClass("mobile-collapse").on("click", function() {
				n.collapseSiblings($(this))
			});
			for (var s = 0, a = e.length; a > s; s++) i = e.eq(s).find("h5"), i.length > 0 && t.eq(s).attr("data-th", i.text())
		},
		parseRows: function() {
			for (var e = this.$("thead > tr > th"), t = this.$("tbody tr"), i = [], n = !1, s = 0, a = t.length; a > s; s++) i = t.eq(s).find(" > td"), 1 === i.length && i.find("table").length > 0 ? (this.createCollapseRow(i.eq(0)), n = !0) : i.length > 0 && this.injectColumnHeads(e, i);
			n && (this.$(".collapse-section").eq(0).addClass("expanded").find(".accordion-arrow").toggleClass("icon-angle-down icon-angle-up"), new vc.Accordion({
				el: this.$el
			}).render())
		},
		createCollapseRow: function(e) {
			this.$el.hasClass("accordion") || this.$el.addClass("standard-accordion accordion"), e.addClass("collapse-section"), e.find("> p:first-child").addClass("accordion-panel-toggle").append('<i class="accordion-arrow icon icon-angle-down"></i>'), e.find("table").addClass("accordion-content accordion-panel-off")
		},
		collapseSiblings: function(e) {
			if (-1 === ["small", "medium"].indexOf(vc.app.currentDevice.name)) return !1;
			e.toggleClass("mobile-collapse--close"), e.find(".icon").toggleClass("icon-angle-up icon-angle-down");
			var t = e.parents("table");
			t.hasClass("accordion-content") && t.height("auto"), e.hasClass("mobile-collapse--close") ? e.siblings().hide() : e.siblings().show()
		},
		adjustLayout: function() {
			this.columnsSize > 4 && "medium" === vc.app.currentDevice.name ? this.$el.addClass("mobile-view") : this.$el.removeClass("mobile-view"), -1 === ["small", "medium"].indexOf(vc.app.currentDevice.name) && this.$("[data-th]").css("display", "")
		},
		resizedWindow: function() {
			this.adjustLayout()
		}
	})
}(),
function() {
	"use strict";
	vc.App = Backbone.View.extend({
		el: $("#volvo"),
		navTimeout: null,
		devices: [{
			name: "extra-large",
			minWidth: 1025
		}, {
			name: "large",
			minWidth: 769
		}, {
			name: "medium",
			minWidth: 480
		}, {
			name: "small",
			minWidth: 0
		}],
		components: {
			".nav": vc.Nav,
			".nav-drop": vc.NavDrop,
			".subnav": vc.SubNav,
			".navScroll": vc.NavScroll,
			".hero-background": vc.HeroBackground,
			".fullscreen-hero": vc.FullscreenHero,
			".hero-group": vc.HeroGroup,
			".video-player": vc.Video,
			".interactive-video-player": vc.InteractiveVideo,
			".story-carousel": vc.StoryCarousel,
			".engine-picker": vc.EnginePicker,
			".tabs": vc.Tabs,
			".lt-wrapper": vc.LanguageTunnel,
			".standard-accordion": vc.Accordion,
			".story-accordion": vc.StoryAccordion,
			".background": vc.Background,
			".story-grid": vc.StoryGrid,
			".gallery": vc.Gallery,
			".gallery-tabs": vc.GalleryTabs,
			".two-cols-wrapper": vc.TwoCols,
			".car-configurator": vc.CarConfig,
			".dropdown-wrapper": vc.Dropdown,
			".manuals-dropdown": vc.ManualsDropdown,
			".manuals-dropdown-item": vc.ManualsDropdownItem,
			".recall": vc.Recall,
			".chart-bar": vc.BarChart,
			".chart-doughnut": vc.DoughnutChart,
			".bar-chart-carousel": vc.BarChartCarousel,
			".will-fade-in": vc.Interactive,
			".dealer-picker-component": vc.DealerPicker,
			".offers-wrapper": vc.Offers,
			".sticky": vc.StickyElement,
			".us-engine-picker": vc.USEnginePicker,
			".car-comparison": vc.CarComparison,
			".inline-car-compare": vc.InlineCarCompare,
			".countdown": vc.Countdown,
			".filterable": vc.Filter,
			".items-list-wrapper": vc.ItemsList,
			".social": vc.SocialSharing,
			".footer": vc.Footer,
			".tabular-layout>table": vc.TablularView,
			".js-corporate-comm": vc.CorporateComm,
			".car-campaign-configurator": vc.CarCampaignConfigurator,
			".campaign-order": vc.CarCampaignOrderForm,
			".find-your-volvo": vc.FindYourVolvo,
			".story-stream-wrapper": vc.StoryStream
		},
		initialize: function() {
			_.bindAll(this, "documentKeyUp", "determineDevice", "scrolled", "resized", "maskClicked"), this.$body = $("body"), this.$html = $("html"), this.$window = $(window), this.$mask = $("#mask"), this.lang = this.$html.attr("lang"), this.isPageEditor = this.$html.hasClass("is-page-editor"), this.scrollbarWidth = this.measureScrollbar(), this.determineDevice({
				silent: !0
			});
			var e = _.bind(this.createComponents, this);
			_.defer(e), $(window).on("resize.app", _.throttle(this.resized, 100));
			var t = this;
			$(window).on("scroll.app", function() {
				window.requestAnimationFrame(t.scrolled)
			}), $(document).keyup(this.documentKeyUp), this.listenTo(this, "mask:show", this.showMask), this.listenTo(this, "mask:hide", this.hideMask)
		},
		events: {
			"click #mask": "maskClicked",
			"click .js-scroll-top": "scrollToTop",
			"scroll-spy:enter-viewport": "interactiveEnterViewport",
			"scroll-spy:half-mark": "interactiveHalfViewport",
			"scroll-spy:leave-viewport": "interactiveLeaveViewport"
		},
		measureScrollbar: function() {
			var e = 0,
				t = $("<div>", {
					"class": "scrollbar-measure"
				});
			return $("body").append(t), "undefined" != typeof t[0].clientWidth && (e = t.width() - t[0].clientWidth), t.remove(), e
		},
		scrollToTop: function(e) {
			e.preventDefault();
			var t = this;
			$("html, body").animate({
				scrollTop: 0
			}, 400, function() {
				t.trigger("app:scrolled")
			})
		},
		maskClicked: function(e) {
			e.preventDefault(), this.trigger("mask:hide")
		},
		showMask: function() {
			this.$html.addClass("no-scroll").css("padding-right", this.scrollbarWidth), this.$mask.addClass("enabled"), this.$mask.removeClass("disabled"), this.$mask.addClass("fade-in")
		},
		hideMask: function() {
			var e = this;
			this.$html.removeClass("no-scroll").css("padding-right", 0), this.$mask.addClass("disabled"), this.$mask.removeClass("enabled fade-in"), setTimeout(function() {
				e.$mask.removeClass("disabled")
			}, 400)
		},
		documentKeyUp: function(e) {
			27 === e.which && this.trigger("app:escapeKeyPressed")
		},
		scrolled: function() {
			this.trigger("app:scrolled", this.$window.scrollTop())
		},
		resized: function() {
			this.determineDevice(), this.trigger("resize")
		},
		determineDevice: function(e) {
			for (var t, i = $(window).width(), n = 0; n < this.devices.length; n++) if (t = this.devices[n], i >= t.minWidth) {
				if (this.currentDevice !== t) {
					var s = this.currentDevice;
					this.currentDevice = t, e && e.silent || this.trigger("device:changed", this.currentDevice, s)
				}
				break
			}
		},
		isMobile: function() {
			return Modernizr.touch || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Mobile|Opera Mini/i.test(navigator.userAgent) ? !0 : !1
		},
		createComponents: function() {
			_.each(this.components, function(e, t) {
				e && $(t).each(function(t, i) {
					var n = new e({
						el: i
					});
					n.render()
				})
			}), $("body").hasClass("interactive") && new vc.Interactive
		},
		newWindow: function(e) {
			return void window.open(e, "_new")
		}
	})
}(),
function() {
	"use strict";
	vc.app = new vc.App, FastClick.attach(document.body), _.defer(function() {
		"start" in Backbone.history && !Backbone.History.started && Backbone.history.start({
			pushState: !1
		})
	}), vc.dealerData = new vc.DealerData
}();