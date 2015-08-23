from django.shortcuts import render

# Create your views here.
def andrew(request):
	context={}
	template= "me_main_template.html"
	return render(request, template, context)
