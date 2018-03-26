from flask import Flask, render_template, request
import firebase

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def test():
    if request.method == 'POST':
        try:
            one = request.form['pname']
        except:
            one = 'error1'
        try:
            two = request.form['date']
        except:
            two = 'error2'
        try:
            three = request.form['gender']
        except:
            three = 'error3'
        try:
            four = request.form['pno']
        except:
            four = 'error4'
        try:
            five = request.form['dob']
        except:
            five = 'error5'
        try:
            six = request.form['address']
        except:
            six = 'error6'
        try:
            seven = request.form['insurance']
        except:
            seven = 'error7'
        try:
            eight = request.form['status']
        except:
            eight = 'error8'
        try:
            nine = request.form['injury']
        except:
            nine = 'error9'
        try:
            ten = request.form['doc']
        except:
            ten = 'error10'
        dict = {
            'Name' : one,
            'Date' : two,
            'Gender' : three,
            'Pno' : four,
            'Dob' : five,
            'Address' :six,
            'Insurance' : seven,
            'Status' : eight,
            'Injury' : nine,
            'Fad' : ten                
            }
        url = "https://hackathon-91c9b.firebaseio.com/"
        firebase.push(url, {'patient_data': dict})
        return render_template("HospitalWebApplication.html")
    
    return render_template("HospitalWebApplication.html")      
    
    
if __name__ == '__main__':
    app.run(debug=True , port = 9001)
