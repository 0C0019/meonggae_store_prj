"use strict";
! function(p, x) {
	p.Package.name = "DashLite", p.Package.version = "3.2";
	var c = x(window),
		a = x("body"),
		l = x(document),
		e = "nk-menu",
		s = "nk-header-menu",
		r = "nk-sidebar",
		t = "nk-sidebar-mobile",
		d = p.Break;

	function u(t, n) {
		return Object.keys(n).forEach(function(e) {
			t[e] = n[e]
		}), t
	}
	p.ClassBody = function() {
		p.AddInBody(r)
	}, p.ClassNavMenu = function() {
		p.BreakClass("." + s, d.lg, {
			timeOut: 0
		}), p.BreakClass("." + r, d.lg, {
			timeOut: 0,
			classAdd: t
		}), c.on("resize", function() {
			p.BreakClass("." + s, d.lg), p.BreakClass("." + r, d.lg, {
				classAdd: t
			})
		})
	}, p.Prettify = function() {
		window.prettyPrint && prettyPrint()
	}, p.Copied = function() {
		var e = ".clipboard-init",
			o = ".clipboard-text",
			i = "clipboard-success",
			s = "clipboard-error";

		function t(e, t) {
			var e = x(e),
				n = e.parent(),
				a = {
					text: "Copy",
					done: "Copied",
					fail: "Failed"
				},
				e = {
					text: e.data("clip-text"),
					done: e.data("clip-success"),
					fail: e.data("clip-error")
				},
				e = (a.text = e.text || a.text, a.done = e.done || a.done, a.fail = e.fail || a.fail, "success" === t ? a.done : a.fail);
			n.addClass("success" === t ? i : s).find(o).html(e), setTimeout(function() {
				n.removeClass(i + " " + s).find(o).html(a.text).blur(), n.find("input").blur()
			}, 2e3)
		}
		ClipboardJS.isSupported() ? new ClipboardJS(e).on("success", function(e) {
			t(e.trigger, "success"), e.clearSelection()
		}).on("error", function(e) {
			t(e.trigger, "error")
		}) : x(e).css("display", "none")
	}, p.CurrentLink = function() {
		var e = window.location.href,
			n = (n = e.substring(0, -1 == e.indexOf("#") ? e.length : e.indexOf("#"))).substring(0, -1 == n.indexOf("?") ? n.length : n.indexOf("?"));
		x(".nk-menu-link, .menu-link, .nav-link").each(function() {
			var e = x(this),
				t = e.attr("href");
			n.match(t) ? (e.closest("li").addClass("active current-page").parents().closest("li").addClass("active current-page"), e.closest("li").children(".nk-menu-sub").css("display", "block"), e.parents().closest("li").children(".nk-menu-sub").css("display", "block"), this.scrollIntoView({
				block: "start"
			})) : e.closest("li").removeClass("active current-page").parents().closest("li:not(.current-page)").removeClass("active")
		})
	}, p.PassSwitch = function() {
		p.Passcode(".passcode-switch")
	}, p.Toast = function(e, t, n) {
		var a = "info" === (t = t || "info") ? "ni ni-info-fill" : "success" === t ? "ni ni-check-circle-fill" : "error" === t ? "ni ni-cross-circle-fill" : "warning" === t ? "ni ni-alert-fill" : "",
			o = {
				position: "bottom-right",
				ui: "",
				icon: "auto",
				clear: !1
			},
			n = n ? u(o, n) : o;
		n.position = n.position ? "toast-" + n.position : "toast-bottom-right", n.icon = "auto" === n.icon ? a : n.icon || "", n.ui = n.ui ? " " + n.ui : "", o = "" !== n.icon ? '<span class="toastr-icon"><em class="icon ' + n.icon + '"></em></span>' : "", "" !== (e = "" !== e ? o + '<div class="toastr-text">' + e + "</div>" : "") && (!0 === n.clear && toastr.clear(), a = {
			closeButton: !0,
			debug: !1,
			newestOnTop: !1,
			progressBar: !1,
			positionClass: n.position + n.ui,
			closeHtml: '<span class="btn-trigger">Close</span>',
			preventDuplicates: !0,
			showDuration: "1500",
			hideDuration: "1500",
			timeOut: "2000",
			toastClass: "toastr",
			extendedTimeOut: "3000"
		}, toastr.options = u(a, n), toastr[t](e))
	}, p.TGL.screen = function(e) {
		x(e).exists() && x(e).each(function() {
			var e = x(this).data("toggle-screen");
			e && x(this).addClass("toggle-screen-" + e)
		})
	}, p.TGL.content = function(e, t) {
		var e = x(e || ".toggle"),
			n = x("[data-content]"),
			s = !1,
			a = {
				active: "active",
				content: "content-active",
				break: !0
			},
			r = t ? u(a, t) : a;
		p.TGL.screen(n), e.on("click", function(e) {
			s = this, p.Toggle.trigger(x(this).data("target"), r), e.preventDefault()
		}), l.on("mouseup", function(e) {
			var t, n, a, o, i;
			s && (t = x(s), n = x(s).data("target"), n = x('[data-content="'.concat(n, '"]')), a = x(".datepicker-dropdown"), o = x(".ui-timepicker-container"), i = x(".modal"), t.is(e.target) || 0 !== t.has(e.target).length || n.is(e.target) || 0 !== n.has(e.target).length || 0 !== x(e.target).closest(".select2-container").length || a.is(e.target) || 0 !== a.has(e.target).length || o.is(e.target) || 0 !== o.has(e.target).length || i.is(e.target) || 0 !== i.has(e.target).length || (p.Toggle.removed(t.data("target"), r), s = !1))
		}), c.on("resize", function() {
			n.each(function() {
				var e = x(this).data("content"),
					t = x(this).data("toggle-screen"),
					t = d[t];
				p.Win.width > t && p.Toggle.removed(e, r)
			})
		})
	}, p.TGL.expand = function(e, t) {
		var e = e || ".expand",
			n = {
				toggle: !0
			},
			a = t ? u(n, t) : n;
		x(e).on("click", function(e) {
			p.Toggle.trigger(x(this).data("target"), a), e.preventDefault()
		})
	}, p.TGL.ddmenu = function(e, t) {
		var e = e || ".nk-menu-toggle",
			n = {
				active: "active",
				self: "nk-menu-toggle",
				child: "nk-menu-sub"
			},
			a = t ? u(n, t) : n;
		x(e).on("click", function(e) {
			(p.Win.width < d.lg || x(this).parents().hasClass(r)) && p.Toggle.dropMenu(x(this), a), e.preventDefault()
		})
	}, p.TGL.showmenu = function(e, t) {
		var n = x(e || ".nk-nav-toggle"),
			a = x("[data-content]"),
			o = a.hasClass(s) ? d.lg : d.xl,
			e = {
				active: "toggle-active",
				content: r + "-active",
				body: "nav-shown",
				overlay: "nk-sidebar-overlay",
				break: o,
				close: {
					profile: !0,
					menu: !1
				}
			},
			i = t ? u(e, t) : e;
		n.on("click", function(e) {
			p.Toggle.trigger(x(this).data("target"), i), e.preventDefault()
		}), l.on("mouseup", function(e) {
			!n.is(e.target) && 0 === n.has(e.target).length && !a.is(e.target) && 0 === a.has(e.target).length && p.Win.width < o && p.Toggle.removed(n.data("target"), i)
		}), c.on("resize", function() {
			(p.Win.width < d.xl || p.Win.width < o) && !p.State.isMobile && p.Toggle.removed(n.data("target"), i)
		})
	}, p.sbCompact = function() {
		var e = x(".nk-nav-compact"),
			t = (x("[data-content]"), x("." + r)),
			n = x("." + r + "-body");
		e.on("click", function(e) {
			e.preventDefault();
			var e = x(this),
				t = e.data("target"),
				t = x("[data-content=" + t + "]");
			e.toggleClass("compact-active"), t.toggleClass("is-compact"), t.hasClass("is-compact") || t.removeClass("has-hover")
		}), n.on("mouseenter", function(e) {
			t.hasClass("is-compact") && t.addClass("has-hover")
		}), n.on("mouseleave", function(e) {
			t.hasClass("is-compact") && t.removeClass("has-hover")
		})
	}, p.Ani.formSearch = function(e, t) {
		var n = {
				active: "active",
				timeout: 400,
				target: "[data-search]"
			},
			a = t ? u(n, t) : n,
			o = x(e),
			i = x(a.target);
		o.exists() && (o.on("click", function(e) {
			e.preventDefault();
			var e = x(this).data("target"),
				t = x("[data-search=" + e + "]"),
				e = x("[data-target=" + e + "]");
			t.hasClass(a.active) ? (e.add(t).removeClass(a.active), setTimeout(function() {
				t.find("input").val("")
			}, a.timeout)) : (e.add(t).addClass(a.active), t.find("input").focus())
		}), l.on({
			keyup: function(e) {
				"Escape" === e.key && o.add(i).removeClass(a.active)
			},
			mouseup: function(e) {
				i.find("input").val() || i.is(e.target) || 0 !== i.has(e.target).length || o.is(e.target) || 0 !== o.has(e.target).length || o.add(i).removeClass(a.active)
			}
		}))
	}, p.Ani.formElm = function(e, t) {
		var n = {
				focus: "focused"
			},
			a = t ? u(n, t) : n;
		x(e).exists() && x(e).each(function() {
			var e = x(this);
			e.val() && e.parent().addClass(a.focus), e.on({
				focus: function() {
					e.parent().addClass(a.focus)
				},
				blur: function() {
					e.val() || e.parent().removeClass(a.focus)
				}
			})
		})
	}, p.Validate = function(e, t) {
		x(e).exists() && x(e).each(function() {
			var e = {
					errorElement: "span"
				},
				e = t ? u(e, t) : e;
			x(this).validate(e), p.Validate.OnChange(".js-select2"), p.Validate.OnChange(".date-picker"), p.Validate.OnChange(".js-tagify")
		})
	}, p.Validate.OnChange = function(e) {
		x(e).on("change", function() {
			x(this).valid()
		})
	}, p.Validate.init = function() {
		p.Validate(".form-validate", {
			errorElement: "span",
			errorClass: "invalid",
			errorPlacement: function(e, t) {
				t.parents().hasClass("input-group") ? e.appendTo(t.parent().parent()) : e.appendTo(t.parent())
			}
		})
	}, p.Dropzone = function(a, o) {
		x(a).exists() && x(a).each(function() {
			var e = x(a).data("max-files") || null,
				t = x(a).data("max-file-size") || 256,
				n = x(a).data("accepted-files"),
				e = {
					autoDiscover: !1,
					maxFiles: e,
					maxFilesize: t,
					acceptedFiles: n || null
				},
				t = o ? u(e, o) : e;
			x(this).addClass("dropzone").dropzone(t)
		})
	}, p.Dropzone.init = function() {
		p.Dropzone(".upload-zone", {
			url: "/images"
		})
	}, p.Wizard = function() {
		var e = x(".nk-wizard");
		e.exists() && e.each(function() {
			var e = x(this).attr("id"),
				a = x("#" + e).show();
			a.steps({
				headerTag: ".nk-wizard-head",
				bodyTag: ".nk-wizard-content",
				labels: {
					finish: "Submit",
					next: "Next",
					previous: "Prev",
					loading: "Loading ..."
				},
				titleTemplate: '<span class="number">0#index#</span> #title#',
				onStepChanging: function(e, t, n) {
					return n < t || (t < n && (a.find(".body:eq(" + n + ") label.error").remove(), a.find(".body:eq(" + n + ") .error").removeClass("error")), a.validate().settings.ignore = ":disabled,:hidden", a.valid())
				},
				onFinishing: function(e, t) {
					return a.validate().settings.ignore = ":disabled", a.valid()
				},
				onFinished: function(e, t) {
					window.location.href = "#"
				}
			}).validate({
				errorElement: "span",
				errorClass: "invalid",
				errorPlacement: function(e, t) {
					e.appendTo(t.parent())
				}
			})
		})
	}, p.DataTable = function(e, i) {
		x(e).exists() && x(e).each(function() {
			var e = x(this).data("auto-responsive"),
				t = !(void 0 === i.buttons || !i.buttons),
				n = x(this).data("export-title") ? x(this).data("export-title") : "Export",
				a = t ? '<"dt-export-buttons d-flex align-center"<"dt-export-title d-none d-md-inline-block">B>' : "",
				t = t ? " with-export" : "",
				o = '<"row justify-between g-2' + t + '"<"col-7 col-sm-4 text-start"f><"col-5 col-sm-8 text-end"<"datatable-filter"<"d-flex justify-content-end g-2"' + a + 'l>>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-start text-md-end"i>>',
				t = '<"row justify-between g-2' + t + '"<"col-7 col-sm-4 text-start"f><"col-5 col-sm-8 text-end"<"datatable-filter"<"d-flex justify-content-end g-2"' + a + 'l>>>><"my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-start text-md-end"i>>',
				a = {
					responsive: !0,
					autoWidth: !1,
					dom: x(this).hasClass("is-separate") ? t : o,
					language: {
						search: "",
						searchPlaceholder: "Type in to Search",
						lengthMenu: "<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",
						info: "_START_ -_END_ of _TOTAL_",
						infoEmpty: "0",
						infoFiltered: "( Total _MAX_  )",
						paginate: {
							first: "First",
							last: "Last",
							next: "Next",
							previous: "Prev"
						}
					}
				},
				t = i ? u(a, i) : a,
				t = !1 === e ? u(t, {
					responsive: !1
				}) : t;
			x(this).DataTable(t), x(".dt-export-title").text(n)
		})
	}, p.DataTable.init = function() {
		p.DataTable(".datatable-init", {
			responsive: {
				details: !0
			}
		}), p.DataTable(".datatable-init-export", {
			responsive: {
				details: !0
			},
			buttons: ["copy", "excel", "csv", "pdf", "colvis"]
		}), x.fn.DataTable.ext.pager.numbers_length = 7
	}, p.BS.ddfix = function(e, t) {
		var n = t || "a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *";
		x(e || ".dropdown-menu").on("click", function(e) {
			x(e.target).is(n) || e.stopPropagation()
		}), p.State.isRTL && x(".dropdown-menu").each(function() {
			var e = x(this);
			e.hasClass("dropdown-menu-right") && !e.hasClass("dropdown-menu-center") ? e.prev('[data-toggle="dropdown"]').dropdown({
				popperConfig: {
					placement: "bottom-start"
				}
			}) : e.hasClass("dropdown-menu-right") || e.hasClass("dropdown-menu-center") || e.prev('[data-toggle="dropdown"]').dropdown({
				popperConfig: {
					placement: "bottom-end"
				}
			})
		})
	}, p.BS.tabfix = function(e) {
		x(e || '[data-toggle="modal"]').on("click", function() {
			var e = x(this),
				t = e.data("target"),
				n = e.attr("href"),
				e = e.data("tab-target"),
				t = t ? a.find(t) : a.find(n);
			e && "#" !== e && t ? t.find('[href="' + e + '"]').tab("show") : t && (n = t.find(".nk-nav.nav-tabs"), e = x(n[0]).find('[data-toggle="tab"]'), x(e[0]).tab("show"))
		})
	}, p.ModeSwitch = function() {
		var e = x(".dark-switch");
		a.hasClass("dark-mode") ? e.addClass("active") : e.removeClass("active"), e.on("click", function(e) {
			e.preventDefault(), x(this).toggleClass("active"), a.toggleClass("dark-mode")
		})
	}, p.Knob = function(e, t) {
		var n, a;
		x(e).exists() && "function" == typeof x.fn.knob && (n = {
			min: 0
		}, a = t ? u(n, t) : n, x(e).each(function() {
			x(this).knob(a)
		}))
	}, p.Knob.init = function() {
		var e = {
				readOnly: !0,
				lineCap: "round"
			},
			t = {
				angleOffset: -90,
				angleArc: 180,
				readOnly: !0,
				lineCap: "round"
			};
		p.Knob(".knob", e), p.Knob(".knob-half", t)
	}, p.Range = function(e, d) {
		x(e).exists() && "undefined" != typeof noUiSlider && x(e).each(function() {
			var e = x(this),
				t = e.attr("id"),
				n = e.data("start"),
				n = (n = /\s/g.test(n) ? n.split(" ") : n) || 0,
				a = e.data("connect"),
				a = void 0 === (a = /\s/g.test(a) ? a.split(" ") : a) ? "lower" : a,
				o = e.data("min") || 0,
				i = e.data("max") || 100,
				s = e.data("min-distance") || null,
				r = e.data("max-distance") || null,
				c = e.data("step") || 1,
				l = e.data("orientation") || "horizontal",
				e = e.data("tooltip") || !1,
				t = (console.log(e), document.getElementById(t)),
				n = {
					start: n,
					connect: a,
					direction: p.State.isRTL ? "rtl" : "ltr",
					range: {
						min: o,
						max: i
					},
					margin: s,
					limit: r,
					step: c,
					orientation: l,
					tooltips: e
				},
				a = d ? u(n, d) : n;
			noUiSlider.create(t, a)
		})
	}, p.Range.init = function() {
		p.Range(".form-control-slider"), p.Range(".form-range-slider")
	}, p.Select2.init = function() {
		p.Select2(".js-select2")
	}, p.Slick = function(e, t) {
		x(e).exists() && "function" == typeof x.fn.slick && x(e).each(function() {
			var e = {
					prevArrow: '<div class="slick-arrow-prev"><a href="javascript:void(0);" class="slick-prev"><em class="icon ni ni-chevron-left"></em></a></div>',
					nextArrow: '<div class="slick-arrow-next"><a href="javascript:void(0);" class="slick-next"><em class="icon ni ni-chevron-right"></em></a></div>',
					rtl: p.State.isRTL
				},
				e = t ? u(e, t) : e;
			x(this).slick(e)
		})
	}, p.Slider.init = function() {
		p.Slick(".slider-init")
	}, p.Lightbox = function(e, t, n) {
		x(e).exists() && x(e).each(function() {
			var e = {},
				e = "video" == t || "iframe" == t ? {
					type: "iframe",
					removalDelay: 160,
					preloader: !0,
					fixedContentPos: !1,
					callbacks: {
						beforeOpen: function() {
							this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
						}
					}
				} : "content" == t ? {
					type: "inline",
					preloader: !0,
					removalDelay: 400,
					mainClass: "mfp-fade content-popup"
				} : {
					type: "image",
					mainClass: "mfp-fade image-popup"
				},
				e = n ? u(e, n) : e;
			x(this).magnificPopup(e)
		})
	}, p.Control = function(e) {
		document.querySelectorAll(e).forEach(function(e, t, n) {
			e.checked && e.parentNode.classList.add("checked"), e.addEventListener("change", function() {
				"checkbox" == e.type && (e.checked ? e.parentNode.classList.add("checked") : e.parentNode.classList.remove("checked")), "radio" == e.type && (document.querySelectorAll('input[name="' + e.name + '"]').forEach(function(e, t, n) {
					e.parentNode.classList.remove("checked")
				}), e.checked) && e.parentNode.classList.add("checked")
			})
		})
	}, p.NumberSpinner = function(e, t) {
		var a = document.querySelectorAll("[data-number='plus']"),
			o = document.querySelectorAll("[data-number='minus']");
		a.forEach(function(e, t, n) {
			a[t].parentNode;
			a[t].addEventListener("click", function() {
				var s = a[t].parentNode.children;
				s.forEach(function(e, t, n) {
					var a, o, i;
					s[t].classList.contains("number-spinner") && (a = "" == !s[t].value ? parseInt(s[t].value) : 0, o = "" == !s[t].step ? parseInt(s[t].step) : 1, i = "" == !s[t].max ? parseInt(s[t].max) : 1 / 0, s[t].value = a + o < i + 1 ? a + o : a)
				})
			})
		}), o.forEach(function(e, t, n) {
			o[t].parentNode;
			o[t].addEventListener("click", function() {
				var s = o[t].parentNode.children;
				s.forEach(function(e, t, n) {
					var a, o, i;
					s[t].classList.contains("number-spinner") && (a = "" == !s[t].value ? parseInt(s[t].value) : 0, o = "" == !s[t].step ? parseInt(s[t].step) : 1, i = "" == !s[t].min ? parseInt(s[t].min) : 0, s[t].value = i - 1 < a - o ? a - o : a)
				})
			})
		})
	}, p.Custom.Stepper = function(n, e) {
		var t = !(!n.dataset.stepInit || isNaN(n.dataset.stepInit)) && parseInt(n.dataset.stepInit),
			t = {
				selectors: {
					nav: e.selectors.nav || "stepper-nav",
					progress: e.selectors.progress || "stepper-progress",
					content: e.selectors.content || "stepper-steps",
					prev: e.selectors.prev || "step-prev",
					next: e.selectors.next || "step-next",
					submit: e.selectors.submit || "step-submit"
				},
				classes: {
					nav_current: e.classes.nav_current || "current",
					nav_done: e.classes.nav_done || "done",
					step_active: e.classes.step_active || "active",
					step_done: e.classes.step_done || "done"
				},
				current_step: t || parseInt(e.current_step)
			},
			a = n.querySelectorAll(".".concat(t.selectors.nav, " > *")),
			o = n.querySelectorAll(".".concat(t.selectors.content, " > *")),
			i = (n.querySelector(".".concat(t.selectors.progress)), n.querySelector(".".concat(t.selectors.progress, "-count"))),
			s = n.querySelector(".".concat(t.selectors.progress, "-bar")),
			r = n.querySelector(".".concat(t.selectors.prev)),
			c = n.querySelector(".".concat(t.selectors.next)),
			l = n.querySelector(".".concat(t.selectors.submit)),
			d = t.classes.nav_current,
			p = t.classes.nav_done,
			u = t.classes.step_active,
			f = t.classes.step_done,
			e = t.current_step || 1,
			g = e,
			m = a.length,
			h = o.length,
			v = 0 < n.querySelectorAll(".".concat(t.selectors.nav)).length,
			b = 0 < n.querySelectorAll(".".concat(t.selectors.progress)).length;

		function k(e) {
			var t = e - 1,
				t = (n.style.display = "block", v && (a.forEach(function(e, t) {
					e.classList.remove(d)
				}), a[t].classList.add(d)), o.forEach(function(e, t) {
					e.classList.remove(u)
				}), o[t].classList.add(u), e);
			1 === t && (c.style.display = "block", r.style.display = "none", l.style.display = "none", n.setAttribute("data-step-current", "first")), h !== t & 1 !== t && (r.style.display = "block", c.style.display = "block", l.style.display = "none", n.setAttribute("data-step-current", t)), h === t && (r.style.display = "block", l.style.display = "block", c.style.display = "none", n.setAttribute("data-step-current", "last")), b && (i.innerHTML = "".concat(e, " of ").concat(h), s.style.width = "".concat(100 / h * e, "%"))
		}
		m !== h && v ? console.error("Stepper nav should have same amount of child element as Stepper steps") : k(e);
		var y = x("#" + n.id).validate({
			errorElement: "span",
			errorClass: "invalid",
			onfocusout: !1,
			errorPlacement: function(e, t) {
				t.parents().hasClass("input-group") ? e.appendTo(t.parent().parent()) : e.appendTo(t.parent())
			}
		});
		r.querySelector("button").addEventListener("click", function(e) {
			e.preventDefault();
			var e = y.form(),
				t = g - 1;
			e ? h !== g && (v && a[t].classList.add(p), o[t].classList.add(f)) : (v && a[t].classList.remove(p), o[t].classList.remove(f)), k(--g)
		}), c.querySelector("button").addEventListener("click", function(e) {
			e.preventDefault(), y.form() && (e = g - 1, v && a[e].classList.add(p), o[e].classList.add(f), k(++g))
		}), l.querySelector("button").addEventListener("click", function(e) {
			e.preventDefault(), y.form()
		})
	}, p.Stepper = function(e, a) {
		e = document.querySelectorAll(e);
		0 < e.length && e.forEach(function(e, t) {
			var n = {
					selectors: {
						nav: "stepper-nav",
						progress: "stepper-progress",
						content: "stepper-steps",
						prev: "step-prev",
						next: "step-next",
						submit: "step-submit"
					},
					classes: {
						nav_current: "current",
						nav_done: "done",
						step_active: "active",
						step_done: "done",
						active_step: "active"
					},
					current_step: 1
				},
				n = a ? u(n, a) : n;
			p.Custom.Stepper(e, n), p.Validate.OnChange(".js-select2"), p.Validate.OnChange(".date-picker"), p.Validate.OnChange(".js-tagify")
		})
	}, p.Stepper.init = function() {
		p.Stepper(".stepper-init")
	}, p.Tagify = function(e, t) {
		x(e).exists() && "function" == typeof x.fn.tagify && (t = t ? u(void 0, t) : void 0, x(e).tagify(t))
	}, p.Tagify.init = function() {
		p.Tagify(".js-tagify")
	}, p.Preloader = function() {
		var e = x(".js-preloader");
		e.exists() && (a.addClass("page-loaded"), e.delay(600).fadeOut(300))
	}, p.OtherInit = function() {
		p.ClassBody(), p.PassSwitch(), p.CurrentLink(), p.LinkOff(".is-disable"), p.ClassNavMenu(), p.SetHW("[data-height]", "height"), p.SetHW("[data-width]", "width"), p.NumberSpinner(), p.Lightbox(".popup-video", "video"), p.Lightbox(".popup-iframe", "iframe"), p.Lightbox(".popup-image", "image"), p.Lightbox(".popup-content", "content"), p.Control(".custom-control-input")
	}, p.Ani.init = function() {
		p.Ani.formElm(".form-control-outlined"), p.Ani.formSearch(".toggle-search")
	}, p.BS.init = function() {
		p.BS.menutip("a.nk-menu-link"), p.BS.tooltip(".nk-tooltip"), p.BS.tooltip(".btn-tooltip", {
			placement: "top"
		}), p.BS.tooltip('[data-toggle="tooltip"]'), p.BS.tooltip('[data-bs-toggle="tooltip"]'), p.BS.tooltip(".tipinfo,.nk-menu-tooltip", {
			placement: "right"
		}), p.BS.popover('[data-toggle="popover"]'), p.BS.popover('[data-bs-toggle="popover"]'), p.BS.progress("[data-progress]"), p.BS.fileinput(".form-file-input"), p.BS.modalfix(), p.BS.ddfix(), p.BS.tabfix()
	}, p.Picker.init = function() {
		p.Picker.date(".date-picker"), p.Picker.dob(".date-picker-alt"), p.Picker.time(".time-picker"), p.Picker.date(".date-picker-range", {
			minDate: 0,
			todayHighlight: !1,
			autoclose: !1
		}), p.Picker.date(".date-picker-ym", {
			format: "mm/yy",
			minDate: 0,
			startView: 2,
			autoclose: !0,
			maxViewMode: 2,
			minViewMode: 1
		})
	}, p.Addons.Init = function() {
		p.Knob.init(), p.Range.init(), p.Select2.init(), p.Dropzone.init(), p.Slider.init(), p.DataTable.init(), p.Tagify.init()
	}, p.TGL.init = function() {
		p.TGL.content(".toggle"), p.TGL.expand(".toggle-expand"), p.TGL.expand(".toggle-opt", {
			toggle: !1
		}), p.TGL.showmenu(".nk-nav-toggle"), p.TGL.ddmenu("." + e + "-toggle", {
			self: e + "-toggle",
			child: e + "-sub"
		})
	}, p.BS.modalOnInit = function() {
		x(".modal").on("shown.bs.modal", function() {
			p.Select2.init(), p.Validate.init()
		})
	}, p.init = function() {
		p.coms.docReady.push(p.OtherInit), p.coms.docReady.push(p.Prettify), p.coms.docReady.push(p.ColorBG), p.coms.docReady.push(p.ColorTXT), p.coms.docReady.push(p.Copied), p.coms.docReady.push(p.Ani.init), p.coms.docReady.push(p.TGL.init), p.coms.docReady.push(p.BS.init), p.coms.docReady.push(p.Validate.init), p.coms.docReady.push(p.Picker.init), p.coms.docReady.push(p.Addons.Init), p.coms.docReady.push(p.Wizard), p.coms.docReady.push(p.sbCompact), p.coms.docReady.push(p.Stepper.init), p.coms.winLoad.push(p.ModeSwitch), p.coms.winLoad.push(p.Preloader)
	}, p.init()
}(NioApp, jQuery);