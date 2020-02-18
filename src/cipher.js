var cesar = cesar || (function() {
			var doStaff = function (txt, desp, action) {
			var replace = (function() {
					var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
						'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
					var l = abc.length;
					return function(c) {
						var i = abc.indexOf(c.toUpperCase());
						if (i != -1) {
							var pos = i;
							if (action) {
								// forward
								pos += desp;
								pos -= (pos >= l)?l:0;
							} else {
								// backward
								pos -= desp;
								pos += (pos < 0)?l:0;
							}
							return abc[pos];
						}
						return c;
					};
				})();
				var re = (/([a-z])/ig);
				return String(txt).replace(re, function (match) {
					return replace(match);
				});
			};

			return {
					encode: function(txt, desp) {
					return doStaff(txt, desp, true);
				},
					decode: function(txt, desp) {
					return doStaff(txt, desp, false);
				}
			};
		})();

		function codificar()
    {
			document.getElementById("resultado").innerHTML=cesar.encode(document.getElementById("cadena").value, 3);
		}
		function decodificar()
		{
			document.getElementById("resultado").innerHTML=cesar.decode(document.getElementById("cadena").value, 3);
		}
