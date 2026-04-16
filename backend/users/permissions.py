from rest_framework.permissions import BasePermission,SAFE_METHODS

class IsStudent(BasePermission):
    message = "Access restricted to student interns only."
    
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and 
            request.user.role == 'student'
        )


class IsWorkplaceSupervisor(BasePermission):
    message = "Access restricted to workplace supervisors."


    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == 'workplace_supervisor'
        )


class IsAcademicSupervisor(BasePermission):
    message = "Access restricted to academic supervisors."


    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == 'academic_supervisor'
        )


class IsSupervisor(BasePermission):
    message = "Access restricted to supervisors."


    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role in ['workplace_supervisor', 'academic_supervisor']
        )


class IsAdmin(BasePermission):
    message = "Access restricted to administrators."


    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == 'internship_admin'
        )


class IsOwnerOrAdmin(BasePermission):


    def has_object_permission(self, request, view, obj):
        if request.user.role == 'internship_admin':
            return True
        
        if hasattr(obj, 'student'):
            return obj.student == request.user
        if hasattr(obj, 'reviewer'):
            return obj.reviewer == request.user
        if hasattr(obj, 'evaluator'):
            return obj.evaluator == request.user
        
        return False 


class ReadOnlyForSupervisor(BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if request.user.role == 'internship_admin':
            return True
        if request.user.role in ['workplace_supervisor', 'academic_supervisor']:
            return request.method in SAFE_METHODS

        return True