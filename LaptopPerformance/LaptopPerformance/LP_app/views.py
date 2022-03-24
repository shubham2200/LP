from time import time
from django.shortcuts import render, HttpResponse
from . models import *
import json
import os
import glob
from django.http import JsonResponse
# from datetime import datetime
from datetime import timedelta
import time
# import logging
# logger = logging.getLogger('django')

base_dir = 'C:\Laptop Performance'


def home(request):
    try:
        context = {}
        context_data = {}
        header_overview = HeaderOverview.objects.all()
        # print(header_overview, 144444)

       
        # print(allsystem,'jacjdbcjhsdcjh') 
        for each_user in header_overview:
            context['no_of_system_connect_with_server'] = each_user.no_of_system_connect_with_server
            context['no_of_data_received'] = each_user.no_of_data_received
            context['no_of_data_not_received'] = each_user.no_of_data_not_received
            context['total_users'] = each_user.total_users
            context['get_date'] = each_user.date
        user_data_summary = UserDataSummary.objects.all()
        context['user_data_summary'] = list(user_data_summary)
        # return render(request, 'LP/home.html',{'data':allsystem} )
        
        print('context:',context)
        # print(header_overview,'advadcadc')
        allsystem = AllSystem.objects.all()
        context_data ={
            'all':allsystem,
            'context' : context 

        }


        return render(request, 'LP/home.html', context_data  )
    except Exception as e:
        # ip = request.META.get('REMOTE_ADDR')
        # logger.exception({'error': e, 'ip': ip})

        # print('header overview error:',e)
        print(e)

    # return render(request, 'LP/home.html', context )


# def date_slab_filter(request):
#     all_data = AllSystem.objects.all()
#     context = {
#         'all_sys_obj': all_data
#     }


#     return render(request, 'LP/home.html' , context)


def systems(request):
    all_sys_obj = AllSystem.objects.all()

    context = {
        'all_sys_obj': all_sys_obj
    }

    return render(request, 'LP/system.html' , context)


def p2p_comparison(request):
    return render(request, 'LP/p2p_comparison.html')


def peak_detection(request):
    return render(request, 'LP/peak_detection.html')


def system_configuration(request, serial_no):
    try:
        serial_no = serial_no

        all_sys_id = AllSystem.objects.get(serial_no=serial_no)

        cofigfiles = [
            os.path.join(dirpath, f)
            for dirpath, dirnames, files in os.walk(base_dir)
            for f in files if f.endswith('system_info.json')
        ]

        for count, cof in enumerate(cofigfiles):
            if serial_no in cof:
                get_count = count

        file = cofigfiles[get_count]

        with open(file, 'r') as f:
            data = json.load(f)

            data['ram_size'] = round(data['ram_size'])
            # data['ssd_size'] = round(data['ssd_size'])
            # data['hdd_size'] = round(data['hdd_size'])

            data.pop('applications')
            # data.pop('Node_name')
            # data.pop('system_processor')
            # print(data)
            context = {
                'data': data,
                'serial_no': serial_no,
            }

        return render(request, 'LP/system_configuration.html', context)

    except Exception as e:
        # ip = request.META.get('REMOTE_ADDR')
        # logger.exception({'error': e, 'ip': ip})
        print(e)

    return render(request, 'LP/system_configuration.html')


def generate_report(request, serial_no):
    try:
        sys_all = AllSystem.objects.all()
        # print('serial_no----', serial_no)

        cofigfiles = [
            os.path.join(dirpath, f)
            for dirpath, dirnames, files in os.walk(base_dir)
            for f in files if f.endswith('system_info.json')
        ]

        # print(cofigfiles, '-----cofigfiles')

        for cof in cofigfiles:
            c = cof.split('\\')[2]
            if serial_no in c:
                take_serial_num = serial_no
                print(take_serial_num)
                # print(serial_no, '---serial_no')
            # print(c, '----cof')

        # print(take_serial_num, '---take_serial_num')

        file = os.path.join(base_dir, '{}', 'utils',
                            'system_info.json').format(take_serial_num)



        # x =[]
        # file_date = os.path.join(base_dir ,"{}" ).format(take_serial_num )
        # for dirp, dir_data, fi in  os.walk(file_date):
        #     print(dir_data,'hjabbdchjadbcjbadc')
        #     for f in dir_data:
        #         # x.append(f)
        #         print(  'hello')
        
        with open(file, 'r') as f:
            data = json.load(f)
            # print(data["hdd_size"] , data["ssd_size"] ,data)
            # if data["serial_number"] == '-' or data["user_name"] == '-' or data["system_name"] == '-' or data["system_release"] == '-'  or data["system_version"] == '-' or data["system_machine"] == '-' or data["system_processor"] == '-' or data["system_physical_cores"] == '-'or data["system_total_cores"] == '-'or data["ram_size"] == '-' or data["hdd_size"] == '-' or data['ssd_size'] == '-' or  data['total_app_opening_time'] == '-' or  data['last_boot_time'] == '-':
            #     print('noooo')
            #     context_data = {}
                
            #     # print('no0000000000',context )
            #     print('no0000000000',data)

            

            #     return render(request, 'LP/generate_report.html')


            # else:
            # print('yesss' , data)
            context = {}
        
            context['serial_number'] = data['serial_number']
            context['user_name'] = data['user_name']
            context['system_name'] = data['system_name']
            context['node_name'] = data['Node_name']
            context['system_release'] = data['system_release']
            context['system_version'] = data['system_version']
            context['system_machine'] = data['system_machine']
            context['system_processor'] = data['system_processor']
            context['system_physical_cores'] = data['system_physical_cores']
            context['system_total_cores'] = data['system_total_cores']
            context['ram_size'] = round(data['ram_size'])
            context['hdd_size'] = data['hdd_size']
            context['ssd_size'] = data['ssd_size']
            context['total_app_opening_time'] = data['total_app_opening_time']
            # context['last_boot_time'] = data['last_boot_time']
            print(context)
            # data_show = {
            #         'context':context
            #     }
        return render(request, 'LP/generate_report.html', context)

    except Exception as e:
        # ip = request.META.get('REMOTE_ADDR')
        # logger.exception({'error': e, 'ip': ip})
        print(e)

    return render(request, 'LP/generate_report.html')


def get_graph_data(request):
    try:
        getDate = "7"
        header_obj = HeaderOverview.objects.all()
        abc = datetime.date.today()-timedelta(days=int(getDate))
        # print(data,'jhdahjadagtggg')

        all_data_recieved = []
        data_not_recieved = []
        connect_to_server = []
        not_connect_to_server = []

        for all_prdct in header_obj:
            all_product_date = all_prdct.date
            if all_product_date >= abc:
                # print(all_product_date, '-----al_product_date')
                # print(all_prdct.no_of_data_received, 200)
                # print(all_prdct.no_of_data_not_received, 201)
                all_data_recieved.append(all_prdct.no_of_data_received)
                data_not_recieved.append(all_prdct.no_of_data_not_received)
                connect_to_server.append(
                    all_prdct.no_of_system_connect_with_server)
                not_connect_to_server.append(
                    all_prdct.no_of_system_connect_with_server-all_prdct.no_of_data_received)
        # print(round(sum(all_data_recieved)/len(all_data_recieved)), '----data_recieve')
        # print(round(sum(data_not_recieved)/len(data_not_recieved)), '---data_not-recieve')
        # print(round(sum(connect_to_server)/len(connect_to_server)), 21000)

        data_recieved = round(sum(all_data_recieved))
        print(data_recieved , 'jhacjgahvcjacanoooo')
        not_recieved = round(sum(data_not_recieved))
        system_connected = round(sum(connect_to_server))
        system_not_connected = round(sum(not_connect_to_server))

        for each_user in header_obj:
            no_system_connected_with_server = each_user.no_of_system_connect_with_server
            no_of_data_received = each_user.no_of_data_received

            print(no_system_connected_with_server, 176)
            print(no_of_data_received, 177)

            # context = {
            #     'status': 'ok',
            #     'no_of_data_received': each_user.no_of_data_received,
            #     'no_of_data_not_received': each_user.no_of_data_not_received,
            #     'no_of_system_connec,'t_with_server': each_user.no_of_system_connect_with_server,
            #     'System_not_Connected_to_server': no_system_connected_with_server - no_of_data_received
            # }

            context = {
                'status': 'ok',
                'no_of_data_received': data_recieved,
                'no_of_data_not_received': not_recieved,
                'no_of_system_connect_with_server': system_connected,
                'System_not_Connected_to_server': system_not_connected
            }
            print(context, 'hzbchjabcjadbhcjhda , yessssss')
            # return JsonResponse(context)

            return HttpResponse(json.dumps(context), content_type="application/json")

    except Exception as e:
        print('e', e)

    return HttpResponse(json.dumps({'status': 'error'}), content_type="application/json")


def get_filtering_date(request):
    getDate = request.GET.get('getdatefilter')
    # print(getDate)
    print(getDate, 182)
    abc = datetime.date.today()-timedelta(days=int(getDate))
    allProduct = HeaderOverview.objects.all().distinct()

    # print(abc, '--abc')

    all_data_recieved = []
    data_not_recieved = []
    connect_to_server = []
    not_connect_to_server = []

    for all_prdct in allProduct:
        all_product_date = all_prdct.date
        if all_product_date >= abc:
            # print(all_product_date, '-----al_product_date')
            # print(all_prdct.no_of_data_received, 200)
            # print(all_prdct.no_of_data_not_received, 201)
            all_data_recieved.append(all_prdct.no_of_data_received)
            data_not_recieved.append(all_prdct.no_of_data_not_received)
            connect_to_server.append(
                all_prdct.no_of_system_connect_with_server)
            not_connect_to_server.append(
                all_prdct.no_of_system_connect_with_server-all_prdct.no_of_data_received)
    # print(round(sum(all_data_recieved)/len(all_data_recieved)), '----data_recieve')
    # print(round(sum(data_not_recieved)/len(data_not_recieved)), '---data_not-recieve')
    # print(round(sum(connect_to_server)/len(connect_to_server)), 21000)

    data_recieved = round(sum(all_data_recieved))
    not_recieved = round(sum(data_not_recieved))
    system_connected = round(sum(connect_to_server))
    system_not_connected = round(sum(not_connect_to_server))

    # print(data_recieved, 211)
    # print(not_recieved, 212)
    # print(system_connected, 216)
    # print(system_not_connected, 224)

    data = {
        'data_recieved': data_recieved,
        'not_recieved': not_recieved,
        'system_connected': system_connected,
        'system_not_connected': system_not_connected
    }

    return JsonResponse(data)


# def get_graph_data(request ):
#     try:
#         header_obj = HeaderOverview.objects.all()
#         print(data,'jhdahjadagtggg')

#         for each_user in header_obj:
#             no_system_connected_with_server = each_user.no_of_system_connect_with_server
#             no_of_data_received = each_user.no_of_data_received

#             print(no_system_connected_with_server, 176)
#             print(no_of_data_received, 177)

#             context = {
#                 'status': 'ok',
#                 'no_of_data_received':each_user.no_of_data_received,
#                 'no_of_data_not_received': each_user.no_of_data_not_received,
#                 'no_of_system_connect_with_server': each_user.no_of_system_connect_with_server,
#                 'System_not_Connected_to_server': no_system_connected_with_server - no_of_data_received
#             }
#             print(context,'hzbchjabcjadbhcjhda')
#             # return JsonResponse(context)

#             return HttpResponse(json.dumps(context), content_type="application/json")

#     except Exception as e:
#         print('e',e)

#     return HttpResponse(json.dumps({'status': 'error'}), content_type="application/json")


def filtering_Date(allProduct, getDate):
    print(getDate)
    current = datetime.date.today() - timedelta(days=int(getDate))
    print(current, 278)
    print(current)

    allowedDates = []
    for gettime in allProduct:
        print(gettime, '-----gettime')
        try:
            saveTime = datetime.strptime(gettime.date, "%m/%d/%y %H:%M").date()
        except:
            try:
                saveTime = datetime.strptime(
                    gettime.date, "%m/%d/%Y %H:%M").date()
            except:
                saveTime = datetime.strptime(
                    gettime.date, "%H:%M:%S %d/%m/%Y").date()

        if current <= saveTime:
            print('current save', current, saveTime)
            gettime.date = saveTime
            allowedDates.append(gettime)
    return allowedDates
# def data_system(request):
#     allsystem = AllSystem.objects.all()
#     print('all' ,allsystem)
#     return render(request, 'home.html' , {'allsystem': allsystem})

def generate_loader(request):
    return JsonResponse({'status':0})

