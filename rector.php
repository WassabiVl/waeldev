<?php

use Rector\Config\RectorConfig;
use Rector\Core\ValueObject\PhpVersion;
use Rector\Php81\Rector\Array_\FirstClassCallableRector;
use Rector\Php81\Rector\Class_\MyCLabsClassToEnumRector;
use Rector\Php81\Rector\Class_\SpatieEnumClassToEnumRector;
use Rector\Php81\Rector\ClassConst\FinalizePublicClassConstantRector;
use Rector\Php81\Rector\ClassMethod\NewInInitializerRector;
use Rector\Php81\Rector\FuncCall\NullToStrictStringFuncCallArgRector;
use Rector\Php81\Rector\FuncCall\Php81ResourceReturnToObjectRector;
use Rector\Php81\Rector\FunctionLike\IntersectionTypesRector;
use Rector\Php81\Rector\MethodCall\MyCLabsMethodCallToEnumConstRector;
use Rector\Php81\Rector\Property\ReadOnlyPropertyRector;
use Rector\Symfony\Set\SymfonySetList;

return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->paths([__DIR__.'/src']);
    $rectorConfig->symfonyContainerXml(
        __DIR__.'/var/cache/dev/App_KernelDevDebugContainer.xml'
    );
    $rectorConfig->parallel();
    $rectorConfig->phpVersion(PhpVersion::PHP_81);
//    $rectorConfig->import(SymfonySetList::SYMFONY_CODE_QUALITY);
//    $rectorConfig->import(SymfonySetList::SYMFONY_CONSTRUCTOR_INJECTION);
    $services = $rectorConfig->services();

    $services->set(FinalizePublicClassConstantRector::class);

    $services->set(IntersectionTypesRector::class);

    $services->set(MyCLabsClassToEnumRector::class);

    $services->set(MyCLabsMethodCallToEnumConstRector::class);

    $services->set(NewInInitializerRector::class);

    $services->set(Php81ResourceReturnToObjectRector::class);

    $services->set(ReadOnlyPropertyRector::class);
    $services->set(NullToStrictStringFuncCallArgRector::class);
    $services->set(FirstClassCallableRector::class);

    $services->set(SpatieEnumClassToEnumRector::class);
//    $rectorConfig->import(SensiolabsSetList::FRAMEWORK_EXTRA_61);
//    $rectorConfig->import(SwiftmailerSetList::SWIFTMAILER_TO_SYMFONY_MAILER);

    // B. or single rule
//    $services->set(TypedPropertyRector::class);
};
// .\vendor\bin\rector process --xdebug