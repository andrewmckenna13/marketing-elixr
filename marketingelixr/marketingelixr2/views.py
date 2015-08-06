from django.shortcuts import render

# Create your views here.
def andrew(request):
	context={}
	template= "andrew.html"
	return render(request, template, context)
